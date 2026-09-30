import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { useLocation } from "wouter";

export default function Experience() {
  const [, navigate] = useLocation();

  const workExperience = [
    {
      role: "Mobile App Developer",
      company: "CODexDev Software House",
      period: "Aug 2024 - Mar 2025",
      location: "Peshawar, Pakistan",
      description: "Design, develop, and maintain mobile applications using Flutter and Dart, ensuring alignment with company's business goals and user requirements.",
      responsibilities: [
        "Design, develop, and maintain mobile applications using Flutter and Dart",
        "Implement backend functionality with Firebase for database management, authentication, and storage",
        "Utilize APIs to integrate mobile apps with back-end services",
        "Provide clear documentation of software design and coding work",
      ],
    },
    {
      role: "Mobile App Developer",
      company: "EncoderBytes Private Ltd",
      period: "Nov 2023 - Jul 2024",
      location: "Remote",
      description: "Focused on marketing strategy, budget management, and market research to identify emerging trends and competitor strategies.",
      responsibilities: [
        "Create and manage the marketing budget, ensuring efficient allocation of resources",
        "Oversee market research to identify emerging trends and customer needs",
        "Monitor brand consistency across marketing channels and materials",
      ],
    },
    {
      role: "IT Support Assistant",
      company: "Khadim Welfare Society",
      period: "Jan 2021 - Aug 2021",
      location: "Peshawar, Pakistan",
      description: "Monitored and maintained company IT infrastructure, participated in creative projects, and negotiated with vendors.",
      responsibilities: [
        "Monitored and maintained the performance of company computers and systems",
        "Participated in creative brainstorming sessions for new video projects",
        "Negotiated with external vendors for procurement of multimedia elements",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "City University of Science and Information Technology",
      period: "2019 - 2023",
      gpa: "3.41 CGPA",
      highlights: [
        "Specialized in AI & Machine Learning",
        "Completed projects in Data Science and Deep Learning",
        "Strong foundation in software development principles",
      ],
    },
    {
      degree: "Pre-Engineering",
      school: "Govt Superior Science College",
      period: "2016 - 2018",
      gpa: "71%",
      highlights: [
        "Strong foundation in mathematics and physics",
        "Prepared for technical education",
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
              className="text-sm hover:text-primary transition-colors text-primary font-semibold"
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
              Career Journey
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl">Experience & Timeline</h1>
            <p className="text-xl text-muted-foreground">
              My professional journey in software development and AI engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl mb-12 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Work Experience
            </h2>

            <div className="space-y-8">
              {workExperience.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-primary">{exp.role}</h3>
                      <p className="text-lg text-foreground font-semibold mt-1">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6">{exp.description}</p>

                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-3">KEY RESPONSIBILITIES</p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-foreground/80 flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-card/50">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-3xl mb-12 flex items-center gap-3">
            <Award className="text-primary" />
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.3 + idx * 0.1}s both`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-primary">{edu.degree}</h3>
                    <p className="text-lg text-foreground font-semibold mt-1">{edu.school}</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm">
                    {edu.gpa}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Calendar size={16} />
                  {edu.period}
                </div>

                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="text-foreground/80 flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display font-bold text-3xl mb-12">Key Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { category: "Mobile Development", skills: "Flutter, Dart, Firebase, API Integration" },
              { category: "AI & ML", skills: "Machine Learning, Generative AI, TensorFlow Lite" },
              { category: "Programming", skills: "Python, JavaScript, TypeScript, SQL" },
              { category: "Tools", skills: "Git, Android Studio, Cursor AI, Windsurf" },
              { category: "Architecture", skills: "MVVM, Provider, Getx, Bloc" },
              { category: "Soft Skills", skills: "Team Work, Communication, Problem Solving" },
            ].map((comp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-card border border-border"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.6 + idx * 0.05}s both`,
                }}
              >
                <h3 className="font-display font-bold text-primary mb-2">{comp.category}</h3>
                <p className="text-sm text-foreground/80">{comp.skills}</p>
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
