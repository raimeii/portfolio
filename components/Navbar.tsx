import Link from "next/link";
import Image from "next/image";

export default function Navbar() {

  const navLinks = [
    {name: "Home", href:"/"},
    {name: "Projects", href:"/projects"},
    {name: "Gunpla Blog", href:"/blog"},
    {name: "Contact", href:"/contact"}
  ]
  return (
    <nav className="sticky h-16 top-0 w-full flex justify-between items-center p-4 backdrop-blur-md shadow-md z-50">
      <div className=" flex items-center gap-2">
        <div className="rounded-xl overflow-hidden">
          <Image
            src={"AB.svg"} alt="Portfolio Icon" className="w-10 h-10" width={64} height={64} unoptimized={true} />
        </div>
        
        <div className="text-2xl font-bold text-white">Allen Burias</div>
      </div>
          <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xl text-white hover:text-secondary"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
