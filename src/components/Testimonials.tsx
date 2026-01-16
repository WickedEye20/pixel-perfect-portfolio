import { Linkedin } from "lucide-react";
import testimony_img from "../assets/testimonial_img.png";
const Testimonials = () => {
  return (
    <section id="about" className="gray-section py-10">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="flex-1 container pt-10">
          <h2 className="section-title text-foreground mb-8">Testimonials</h2>
          <p className="text-black text-xl lg:text-2xl italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sit cursus pellentesque egestas id. Nullam id et ut tincidunt sit amet. Et libero quis proin tincidunt netus magna ut. Urna, imperdiet scelerisque magna at orci."
          </p>
        </div>
        <div className="flex-shrink-0 p-20 md:p-32 md:py-28 lg:p-40 primary_gradient w-full md:w-auto">
          <img
            width={90}
            height={90}
            src={testimony_img}
            alt="Abhishek Misra"
            className="m-auto object-cover rounded-full"
          />
          <h6 className="text-lg text-white text-center mt-5">Alice Campbell</h6>
          <p className="text-white text-center">Model</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
