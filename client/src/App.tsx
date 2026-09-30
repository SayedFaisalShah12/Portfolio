import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBlog from "./pages/AdminBlog";
import AdminProjects from "./pages/AdminProjects";
import AdminMessages from "./pages/AdminMessages";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/skills"} component={Skills} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/experience"} component={Experience} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/contact"} component={Contact} />
      
      {/* Admin Routes */}
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/admin/blog"} component={AdminBlog} />
      <Route path={"/admin/projects"} component={AdminProjects} />
      <Route path={"/admin/messages"} component={AdminMessages} />
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
