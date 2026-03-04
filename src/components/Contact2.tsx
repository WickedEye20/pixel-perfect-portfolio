import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "@/components/ui/use-toast";

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // ✅ Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Silent validation (NO TOAST)
  const validateForm = () => {
    if (!formData.name.trim()) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return false;

    return true;
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // stop if invalid (browser required fields already help)
    if (!validateForm()) return;

    if (!recaptchaRef.current) return;

    setIsSubmitting(true);

    try {
      // 🔐 Execute captcha
      const token = await recaptchaRef.current.executeAsync();

      if (!token) {
        toast({
          title: "Verification failed",
          description: "Captcha verification failed.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // 📡 Send data
      await fetch(
        "https://script.google.com/macros/s/AKfycbxIkyWJt2Gt3R_WqpdOZEnlKHuGVCCNm-j0bHHfMNVTCkcrB_ZfltiepFq5CHUUjFXM7Q/exec",
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

      // ✅ SUCCESS TOAST ONLY HERE
      toast({
        title: "Form Submitted",
        description: "Your form has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
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
              />
            </div>

            {/* Invisible reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfEhmwsAAAAAJs6sZQqv--2Jb0a4nw1VcARhTyA"
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
