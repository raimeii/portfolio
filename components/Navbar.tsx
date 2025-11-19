import Link from "next/link";

export default function Navbar() {

  const navLinks = [
    {name: "Home", href:"/"},
    {name: "Projects", href:"/projects"},
    {name: "Gunpla Blog", href:"/blog"},
    {name: "Contact", href:"/contact"}
  ]
  return (
    <nav className="fixed h-16 top-0 w-full flex justify-between items-center p-4 /80 backdrop-blur-md shadow-md z-50">
      <div className="text-2xl font-bold text-white">Allen Burias</div>

      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-xl text-white hover:text-primary"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
