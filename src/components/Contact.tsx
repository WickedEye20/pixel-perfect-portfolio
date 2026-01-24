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
    <section id="contact" className="light-section py-32 scroll-mt-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Get in Touch</h2>
        <div className="max-w-xl p-6 rounded-xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.078)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ct_name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                Name *
              </label>
              <input
                id="ct_name"
                type="text"
                name="name"
                placeholder="e.g. John Doe"
                value={formData.name}
                onChange={handleChange}
                className="input-field text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="ct_email" className="block text-sm font-medium text-muted-foreground mb-1.5">
                Email Address *
              </label>
              <input
                id="ct_email"
                type="email"
                name="email"
                placeholder="e.g. jdoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="input-field text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="ct_message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                Comment
              </label>
              <textarea
                id="ct_message"
                name="message"
                placeholder="Leave us a message..."
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="input-field resize-none text-sm"
                required
              />
            </div>

            <div className="flex items-end justify-between gap-4">
              <button
                type="submit"
                className="btn-primary text-base rounded-full"
              >
                Submit
              </button>
              <span>*Required</span>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
