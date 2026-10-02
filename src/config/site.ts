export const SITE_CONFIG = {
  name: "Sayed Faisal Shah",
  title: "Agentic AI & Machine Learning Engineer",
  headline: "Agentic AI & Machine Learning Engineer | Flutter Specialist",
  tagline: "Building intelligent software with Agentic AI, Generative AI, Machine Learning, and modern application development.",
  secondaryTagline: "I build practical AI-powered systems, intelligent agents, machine learning applications, and cross-platform software.",
  location: "Peshawar, Khyber Pakhtunkhwa, Pakistan",
  baseUrl: import.meta.env.BASE_URL || "/Portfolio/",
  
  social: {
    github: "https://github.com/SayedFaisalShah12",
    linkedin: "YOUR_LINKEDIN_URL", // User can replace this with their actual LinkedIn profile
    email: "YOUR_EMAIL", // User can replace this with their actual Email address
    resume: `${import.meta.env.BASE_URL || "/Portfolio/"}resume.pdf`,
  },
  
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Agentic AI", href: "#agentic-ai" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Flutter", href: "#flutter" },
    { label: "Contact", href: "#contact" },
  ]
};

/**
 * Helper utility to safely validate URLs before opening or rendering
 */
export function getSafeUrl(url: string | null | undefined): string | null {
  if (!url || url.trim() === "" || url === "YOUR_LINKEDIN_URL" || url === "YOUR_EMAIL") {
    return null;
  }
  
  if (url.startsWith("mailto:")) return url;
  if (url.startsWith("#") || url.startsWith("/")) return url;
  
  try {
    const parsed = new URL(url);
    return parsed.href;
  } catch {
    // If it's a relative link or incomplete string, default safe fallback
    return null;
  }
}
