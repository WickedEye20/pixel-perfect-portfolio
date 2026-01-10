import { Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="dark-section py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            Copyright © 2024 abhishekmisra.io. All Rights Reserved
          </p>
          
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <social.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
