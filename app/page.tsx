import { SanityDocument } from "@sanity/client";
import { client, sanityFetch } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { Images } from "lucide-react";

const PRODUCTS_QUERY = `*[_type == "product"]{_id, name, images}|order(name asc)`;

const { projectId, dataset } = client.config();
const builder = imageUrlBuilder(client);

export default async function HomePage() {
  const products = await sanityFetch<SanityDocument[]>({
    query: PRODUCTS_QUERY,
  });

  return (
    <main className="container mx-auto w-full">
      <h1 className="text-3xl font-bold my-8">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 shadow rounded h-50 w-50"
          >
            <Image
              src={builder.image(product.images[0] as SanityImageSource).url()}
              alt={product.name}
              width={400}
              height={400}
              layout="responsive"
            />
            {product.name && (
              <h2 className="text-xl font-bold text-black">{product.name}</h2>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
