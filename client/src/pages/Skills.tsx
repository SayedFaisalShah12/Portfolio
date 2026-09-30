import { Brain, Code2, Zap, Database, Smartphone, Settings } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "wouter";

export default function Skills() {
  const { theme } = useTheme();
  const [, navigate] = useLocation();

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning Fundamentals",
        "Supervised & Unsupervised Learning",
        "Data Preprocessing & Feature Engineering",
        "Python (NumPy, Pandas, Scikit-learn)",
        "Model Training & Evaluation",
        "Generative AI (LLMs, Prompt Engineering)",
        "TensorFlow Lite (TFLite) Integration",
        "AI APIs (OpenAI, Hugging Face)",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        "Dart Language",
        "Flutter Framework",
        "Firebase",
        "Responsive UI Design",
        "MVVM Architecture",
        "State Management (Provider, Getx, Bloc)",
        "API Integration",
        "Test-Driven Development",
      ],
    },
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        "Python",
        "Dart",
        "JavaScript",
        "TypeScript",
        "SQL",
      ],
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: [
        "Firebase",
        "Android Studio",
        "Cursor AI",
        "Windsurf AI",
        "Github",
        "Git",
        "TFlite Integration",
      ],
    },
    {
      icon: Settings,
      title: "Architecture & Patterns",
      skills: [
        "MVVM Architecture",
        "Provider Pattern",
        "Getx Framework",
        "Bloc Pattern",
        "Share Preference",
        "Third-party APIs Integration",
      ],
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: [
        "Team Work",
        "Communication",
        "Continuous Learning",
        "Time Management",
        "Problem Solving",
        "Project Management",
      ],
    },
  ];

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
              className="text-sm hover:text-primary transition-colors text-primary font-semibold"
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
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/skills-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="container relative z-10">
          <div className="space-y-4 max-w-3xl">
            <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase">
              Expertise
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl">Core Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground">
              Proficient in cutting-edge technologies and methodologies for building intelligent systems and mobile applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <category.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="py-20 bg-card/50">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase">
                Proficiency
              </p>
              <h2 className="font-display font-bold text-4xl">Skill Proficiency Levels</h2>
            </div>

            <div className="space-y-6">
              {[
                { skill: "Flutter & Dart", level: 95 },
                { skill: "Machine Learning & AI", level: 85 },
                { skill: "Python", level: 90 },
                { skill: "Firebase", level: 88 },
                { skill: "API Integration", level: 92 },
                { skill: "UI/UX Design", level: 80 },
              ].map((item, idx) => (
                <div key={idx} style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-primary font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/50 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
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
