import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="dark-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-white">Testimonials</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Quote className="absolute top-6 left-6 w-6 h-6 text-primary/60" />
            
            <blockquote className="text-white/80 text-sm leading-relaxed mb-6 pl-10 pr-4">
              "I have knowledge about all your competencies including the things not listed here. 
              This is a testimonial demonstrating all the testimonial layout I have for you. The 
              testimonial is two lines big and you will see similar structure when implementing 
              another section."
            </blockquote>
            
            <div className="flex items-center gap-4 pl-10">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                  alt="Albert Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Albert Consultant</p>
                <p className="text-white/50 text-xs">Role</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
