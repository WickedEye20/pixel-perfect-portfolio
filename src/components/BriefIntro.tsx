const BriefIntro = () => {
  return (
    <section id="about" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-foreground">Brief Intro</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <div className="flex-shrink-0">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Abhishek Misra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-muted-foreground leading-relaxed text-sm">
              With over 15+ years of expertise spanning AI Product Management (APM), Technical Product & 
              Program Management (TPM), and Product Lifecycle Management (PLM), I excel in navigating complex 
              digital transformations for Fortune 500 companies. My focus areas include Generative AI, 
              Large Language Models, and Machine Learning applications, driving multi-million dollar AI 
              initiatives for clients including leading technology & consulting firms like Deloitte, 
              CGI & Dell Technologies.
            </p>
            <div className="mt-6">
              <a href="#contact" className="btn-primary inline-block text-sm">
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
