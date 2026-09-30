import { ExternalLink, Github } from "lucide-react";
import { useLocation } from "wouter";

export default function Projects() {
  const [, navigate] = useLocation();

  const projects = [
    {
      title: "Muscolo - Fitness App",
      company: "CodexDev",
      description: "A comprehensive fitness application designed to help users find, purchase, and follow workout programs tailored to their fitness goals. The app offers a variety of workout programs created by different fitness professionals, allowing users to browse through options, view detailed descriptions, and watch preview videos.",
      features: [
        "Browse and purchase workout programs",
        "Track workout schedules",
        "Access instructional videos",
        "Personalized fitness recommendations",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "API Integration"],
      link: "#",
      github: "#",
    },
    {
      title: "Learning App",
      company: "CodexDev",
      description: "A comprehensive learning platform designed to help users find and enroll in a wide variety of courses. Whether looking to enhance skills, explore new subjects, or advance their career, this app offers easy access to quality educational content.",
      features: [
        "Browse and enroll in courses",
        "Interactive learning experiences",
        "Progress tracking",
        "Course recommendations",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
      link: "#",
      github: "#",
    },
    {
      title: "Doctor Appointment App",
      company: "CodexDev",
      description: "Streamlines healthcare access by enabling users to search for doctors, schedule appointments, and manage their medical history all in one place. Patients can browse available doctors by specialty, view their availability, and book consultations with ease.",
      features: [
        "Doctor search and filtering",
        "Appointment scheduling",
        "Medical history management",
        "Appointment reminders",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST API"],
      link: "#",
      github: "#",
    },
    {
      title: "Cricketer Performance Prediction",
      company: "Academic Project",
      description: "ML-based project that predicts cricketer performance using machine learning algorithms. Analyzes historical data and player statistics to provide performance predictions.",
      features: [
        "Data preprocessing and cleaning",
        "Feature engineering",
        "ML model training",
        "Performance visualization",
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      link: "#",
      github: "#",
    },
    {
      title: "Data Cleaning & Feature Engineering",
      company: "Academic Project",
      description: "Python-based project focusing on data preprocessing, cleaning, and feature engineering techniques for machine learning pipelines.",
      features: [
        "Data cleaning",
        "Missing value handling",
        "Feature scaling",
        "Feature selection",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      link: "#",
      github: "#",
    },
    {
      title: "Regression & Classification Models",
      company: "Academic Project",
      description: "Implementation of various regression and classification models with evaluation metrics and performance analysis.",
      features: [
        "Linear regression",
        "Logistic regression",
        "Decision trees",
        "Model evaluation",
      ],
      technologies: ["Python", "Scikit-learn", "Matplotlib", "Pandas"],
      link: "#",
      github: "#",
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
              className="text-sm hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="text-sm hover:text-primary transition-colors text-primary font-semibold"
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
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="space-y-4 max-w-3xl">
            <p className="text-primary font-mono text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl">Featured Projects</h1>
            <p className="text-xl text-muted-foreground">
              Showcase of work demonstrating expertise in AI, ML, and mobile app development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.company}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>

                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">KEY FEATURES</p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex-1 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium text-center"
                    >
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-sm font-medium text-center flex items-center justify-center gap-2"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container max-w-2xl text-center space-y-6">
          <h2 className="font-display font-bold text-3xl">Have a Project Idea?</h2>
          <p className="text-lg text-muted-foreground">
            Let's collaborate on your next AI-powered application or mobile project.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
          >
            Get in Touch
          </button>
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
