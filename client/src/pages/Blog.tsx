import { ArrowRight, Calendar } from "lucide-react";
import { useLocation } from "wouter";

export default function Blog() {
  const [, navigate] = useLocation();

  const articles = [
    {
      id: 1,
      title: "Getting Started with Large Language Models",
      excerpt: "A comprehensive guide to understanding and implementing LLMs in your projects. Learn about prompt engineering, fine-tuning, and practical applications.",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      category: "AI/ML",
      content: "This article covers the fundamentals of Large Language Models, their architecture, and how to integrate them into your applications...",
    },
    {
      id: 2,
      title: "Building Production-Ready Flutter Apps",
      excerpt: "Best practices for developing, testing, and deploying Flutter applications. Learn about state management, performance optimization, and CI/CD.",
      date: "Jan 10, 2024",
      readTime: "12 min read",
      category: "Mobile Development",
      content: "In this guide, we explore the best practices for building scalable Flutter applications that are ready for production...",
    },
    {
      id: 3,
      title: "Machine Learning Model Deployment",
      excerpt: "Learn how to deploy ML models to production using TensorFlow Lite, Firebase ML Kit, and cloud services.",
      date: "Jan 5, 2024",
      readTime: "10 min read",
      category: "ML/AI",
      content: "Deploying machine learning models to production requires careful consideration of performance, security, and scalability...",
    },
    {
      id: 4,
      title: "Firebase Best Practices for Mobile Apps",
      excerpt: "Optimize your Firebase implementation with these proven best practices for authentication, database, and storage.",
      date: "Dec 28, 2023",
      readTime: "9 min read",
      category: "Backend",
      content: "Firebase provides a comprehensive platform for mobile app development. Here are the best practices we've learned...",
    },
    {
      id: 5,
      title: "Generative AI in Mobile Applications",
      excerpt: "Explore how to integrate generative AI features into your mobile apps for enhanced user experiences.",
      date: "Dec 20, 2023",
      readTime: "11 min read",
      category: "AI/ML",
      content: "Generative AI is revolutionizing mobile app development. Learn how to leverage these technologies in your projects...",
    },
    {
      id: 6,
      title: "Data Preprocessing Techniques for ML",
      excerpt: "Master the essential data preprocessing techniques that improve model performance and training efficiency.",
      date: "Dec 15, 2023",
      readTime: "7 min read",
      category: "Data Science",
      content: "Data preprocessing is a critical step in the machine learning pipeline. This article covers essential techniques...",
    },
  ];

  const categories = ["All", "AI/ML", "Mobile Development", "Backend", "Data Science"];

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
              className="text-sm hover:text-primary transition-colors text-primary font-semibold"
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
              Insights
            </p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl">Latest Articles & Blog Posts</h1>
            <p className="text-xl text-muted-foreground">
              Sharing knowledge about AI, ML, mobile development, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  cat === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div
                key={article.id}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10 flex flex-col"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 rounded text-xs font-mono bg-primary/10 text-primary">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-2">
                    <Calendar size={14} />
                    {article.date}
                  </span>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-card/50">
        <div className="container max-w-2xl">
          <div className="p-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
            <h2 className="font-display font-bold text-3xl mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive the latest articles and insights about AI, ML, and software engineering.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
