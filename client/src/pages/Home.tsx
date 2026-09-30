import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Modern Minimalist with Tech Accent
 * - Deep charcoal background with electric cyan accents
 * - Asymmetric layouts with ample whitespace
 * - Smooth scroll-triggered animations
 * - Poppins for display, Inter for body, Space Mono for code
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
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
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-card hover:bg-primary/20 text-primary transition-all duration-300"
              title="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse z-0" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="font-display font-bold text-5xl lg:text-6xl leading-tight">
                Sayed Faisal
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                GenAI & Machine Learning Engineer | Flutter Developer
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              AI-focused Software Engineer with a strong foundation in development and growing expertise in Machine Learning, Generative AI, and Agentic AI systems. Experienced in building cross-platform apps, integrating AI models, and deploying intelligent features.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <Button
                onClick={() => navigate("/projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2"
              >
                View My Work <ArrowRight size={16} />
              </Button>
              <a href="/resume.pdf" download>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sayed-faisal-shah-7950891a9"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:agcasma59@gmail.com"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative h-96">
            <div className="absolute w-80 h-80 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl animate-float" />
            <div className="relative z-10 text-center">
              <div className="inline-block p-8 rounded-2xl bg-card border border-primary/20 backdrop-blur-sm">
                <span className="text-6xl">💻</span>
                <p className="text-sm font-mono text-muted-foreground mt-4">Building AI-powered solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies", value: "20+" },
              { label: "Happy Clients", value: "5+" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center" style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-display font-bold text-4xl lg:text-5xl">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate on your next AI-powered project or mobile application.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => navigate("/projects")}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-3"
            >
              See My Projects
            </Button>
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
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
