import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Brief Info", href: "#about" },
    { label: "Tech Skills", href: "#skills" },
    { label: "Experience", href: "/work-experience" },
    { label: "Projects", href: "/technical-experience" },
    { label: "Education", href: "#education" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${
            isScrolled || !isHome
              ? "secondary_gradient rounded-ee-[10px] rounded-es-[10px]"
              : ""
          }
        `}
      >
        <nav className="container mx-auto py-7 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-white font-semibold text-lg">
            Abhishek Misra
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm tracking-wide xl:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-primary z-50 transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 flex justify-between items-center">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button
            className="text-white text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 mt-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
