import { User } from "lucide-react";

const BriefIntro = () => {
  return (
    <section id="about" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Brief Intro</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center border-4 border-primary/30">
              <User className="w-20 h-20 text-primary" />
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              With over 15+ years of expertise spanning AI Product Management (APM), Technical Product & 
              Program Management (TPM), and Product Lifecycle Management (PLM), I excel in navigating complex 
              digital transformations for Fortune 500 companies. My focus areas include Generative AI, 
              Large Language Models, and Machine Learning applications, driving multi-million dollar AI 
              initiatives for clients including leading technology & consulting firms like Deloitte, 
              CGI & Dell Technologies.
            </p>
            <div className="mt-4">
              <a href="#contact" className="btn-primary inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefIntro;
