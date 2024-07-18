import Tile from "@/components/Tile";
import { client, sanityFetch } from "@/sanity/client";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const PRODUCTS_QUERY = `*[_type == "product"]{_id, name, images}|order(name asc)`;

const { projectId, dataset } = client.config();
const builder = imageUrlBuilder(client);

export default async function HomePage() {
  const products = await sanityFetch<SanityDocument[]>({
    query: PRODUCTS_QUERY,
  });

  return (
  <div className="mx-auto py-5 max-w-6xl">
    <div>
          <h4 className="text-sm font-bold break-words:break-none">This is the homepage of the emporium</h4>
    </div>
  
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        

        <Tile />
        <Tile />
        <Tile />
        <Tile />
        </div>
  </div>);
      // {/* <h1 className="text-3xl font-bold my-8">Products</h1>
      // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      //   {products.map((product) => (
      //     <div
      //       key={product._id}
      //       className="bg-white p-4 border solid border-red-950 hover:shadow-lg rounded h-50ui w-50 hover:scale-105 transition-transform duration-300 "
      //     >
      //       <Image
      //         src={builder.image(product.images[0] as SanityImageSource).url()}
      //         alt={product.name}
      //         width={400}
      //         height={400}
      //         layout="responsive"
      //         className="rounded-t-lg"
      //       />
      //       {product.name && (
      //         <h2 className="text-xl font-bold text-black mt-8">{product.name}</h2>
      //       )}
      //     </div>
      //   ))}
      // </div> */}
}
