const Header = () => {
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

  return (
    <header className="hero-section">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white font-semibold text-lg">abhishekmisra</span>
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link text-xs tracking-wide">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
