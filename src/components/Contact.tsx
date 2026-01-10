import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="light-section py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Get in Touch</h2>
        
        <div className="max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field text-sm"
                required
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="input-field text-sm"
                required
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Phone No
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input-field text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="input-field resize-none text-sm"
                required
              />
            </div>
            
            <button
              type="submit"
              className="btn-primary text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
