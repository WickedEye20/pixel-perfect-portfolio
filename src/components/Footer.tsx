import { Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import twitter from "../assets/footer/twitter.png";
import github from "../assets/footer/github.png";
import linkedin from "../assets/footer/linkedIn.png";
import tableu from "../assets/footer/tableu.png";

const Footer = () => {
  const socialLinks = [
    { icon: twitter, href: "https://twitter.com/abhi_nyc_mishra", label: "Twitter" },
    { icon: linkedin, href: "https://www.linkedin.com/in/abhishekmishra11/", label: "LinkedIn" },
    { icon: github, href: "https://github.com/abhishekmishra11", label: "GitHub" },
    { icon: tableu, href: "https://public.tableau.com/profile/abhi.misra#!/", label: "Tableu" },
  ];

  return (
    <footer className="secondary_gradient py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-base">
            Copyright © 2025, Abhishek Misra | All Right Reserved
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                target="_blank"
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
