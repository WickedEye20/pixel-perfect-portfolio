import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Brief Info", path: "/", hash: "about" },
    { label: "Tech Skills", path: "/", hash: "skills" },
    { label: "Experience", path: "/work-experience" },
    { label: "Projects", path: "/technical-experience" },
    { label: "Education", path: "/", hash: "education" },
    { label: "Testimonials", path: "/", hash: "testimonials" },
    { label: "Contact", path: "/", hash: "contact" },
  ];

  // Scroll effect
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

  const handleNavClick = (link) => {
    // Normal page navigation
    if (!link.hash) {
      navigate(link.path);
      return;
    }

    // Already on homepage → scroll directly
    if (location.pathname === "/") {
      const el = document.getElementById(link.hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    // On another page → navigate then scroll
    else {
      navigate("/", { state: { scrollTo: link.hash } });
    }

    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300
          ${isScrolled || !isHome ? "secondary_gradient" : ""}
        `}
      >
        <nav className="container mx-auto py-7 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="text-white font-semibold text-lg"
          >
            Abhishek Misra
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="nav-link text-sm tracking-wide xl:text-base"
              >
                {link.label}
              </button>
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
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="text-white text-base text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
