import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="w-full relative flex item-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="bold text-3xl">
                The<span className="text-primary ml-2">
                Emporium
                </span>
            </Link>
            <ModeToggle />
        </nav>
    )
}