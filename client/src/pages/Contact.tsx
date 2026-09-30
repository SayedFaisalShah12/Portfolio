import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Contact() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => navigate("/")}
            className="font-display font-bold text-xl text-primary hover:text-primary/80 transition-colors"
          >
            SF
          </button>
          <div className="flex gap-6 items-center">
            <button
              onClick={() => navigate("/skills")}
              className="text-sm hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/experience")}
              className="text-sm hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="text-sm hover:text-primary transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-sm hover:text-primary transition-colors text-primary font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="space-y-4 max-w-3xl">
            <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl">Let's Work Together</h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's discuss how we can collaborate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                style={{ animation: "fadeInUp 0.6s ease-out 0s both" }}
              >
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold mb-2">Email</h3>
                    <a
                      href="mailto:agcasma59@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      agcasma59@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
              >
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold mb-2">Phone</h3>
                    <a
                      href="tel:+923069878233"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +92 306 9878233
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
                style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
              >
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground">Peshawar, KPK, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                className="pt-8 border-t border-border"
                style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
              >
                <h3 className="font-display font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/sayed-faisal-shah-7950891a9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:agcasma59@gmail.com"
                    className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="lg:col-span-2 p-8 rounded-xl bg-card border border-border"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              <h2 className="font-display font-bold text-2xl mb-8">Send Me a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-primary/20 border border-primary/50 text-primary">
                  ✓ Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What is your typical response time?",
                a: "I aim to respond to all inquiries within 24-48 hours. For urgent matters, please call me directly.",
              },
              {
                q: "Do you offer freelance services?",
                a: "Yes, I offer freelance services for mobile app development, AI/ML projects, and consulting.",
              },
              {
                q: "What technologies do you specialize in?",
                a: "I specialize in Flutter/Dart for mobile development, Python for ML/AI, and Firebase for backend services.",
              },
              {
                q: "Can you help with existing projects?",
                a: "Absolutely! I can help with debugging, optimization, feature additions, and maintenance of existing projects.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-background border border-border"
                style={{ animation: `fadeInUp 0.6s ease-out ${0.3 + idx * 0.1}s both` }}
              >
                <h3 className="font-display font-bold text-lg text-primary mb-3">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Sayed Faisal. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .font-display {
          font-family: "Poppins", sans-serif;
        }

        .font-mono {
          font-family: "Space Mono", monospace;
        }
      `}</style>
    </div>
  );
}
