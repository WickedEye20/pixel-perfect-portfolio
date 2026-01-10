import { Quote, User } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">Testimonials</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/50" />
            
            <blockquote className="text-white/90 text-lg leading-relaxed mb-6 pl-8">
              "I have knowledge about all your competencies including the things not listed here. 
              This is a testimonial demonstrating all the testimonial layout I have for you. The 
              testimonial is two lines big and you will see similar structure when implementing 
              another section."
            </blockquote>
            
            <div className="flex items-center gap-4 pl-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/50 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Albert Consultant</p>
                <p className="text-white/60 text-sm">Role</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
