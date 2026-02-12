import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaRef.current) return;

    setIsSubmitting(true);

    try {
      // 1️⃣ Execute invisible reCAPTCHA
      const token = await recaptchaRef.current.executeAsync();

      if (!token) {
        alert("reCAPTCHA verification failed");
        setIsSubmitting(false);
        return;
      }

      // 2️⃣ Send form data to Google Apps Script
      await fetch(
        "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            recaptchaToken: token,
          }),
          mode: "no-cors",
        }
      );

      console.log("Form submitted:", formData);

      // 3️⃣ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      recaptchaRef.current.reset();
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="light-section py-32 scroll-mt-32">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
          Get in Touch
        </h2>

        <div className="max-w-xl p-6 rounded-xl bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.078)] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                Comment
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="input-field resize-none text-sm"
                required
              />
            </div>

            {/* Invisible reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              size="invisible"
            />

            <div className="flex items-end justify-between gap-4">
              <button
                type="submit"
                className="btn-primary text-base rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <span>*Required</span>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
