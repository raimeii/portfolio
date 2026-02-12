import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function Footer() {

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/allenburias", icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/raimeii", icon: <FaGithub /> },
    { name: "Resume", href: "/CV_Allen Burias 2025_SE.pdf", icon: <FaFileAlt /> },
  ];

  return (
    <footer className="sticky bottom-0 w-full flex justify-center items-center p-4 backdrop-blur-md shadow-md z-50">
      <div className="flex items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl text-white hover:text-secondary transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
