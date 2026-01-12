import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: "ABOUT ME", href: "#about" },
    { label: "TECH SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EDUCATION", href: "#education" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? "primary_gradient rounded-ee-[10px] rounded-es-[10px]" : ""}
      `}
    >
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <span className="text-white font-semibold text-lg">
          Abhishek Misra
        </span>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-xs tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
