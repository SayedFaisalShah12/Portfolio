import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { FileText, Briefcase, Zap, Mail } from "lucide-react";
import { trpc } from "@/lib/trpc";

export default function AdminDashboard() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  // Redirect if not admin
  useEffect(() => {
    if (isAuthenticated && user?.role !== "admin") {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  // Fetch data
  const { data: blogPosts = [] } = trpc.blog.all.useQuery();
  const { data: projects = [] } = trpc.projects.all.useQuery();
  const { data: messages = [] } = trpc.messages.list.useQuery();
  const { data: skills = [] } = trpc.skills.list.useQuery();

  const unreadMessages = messages.filter((m: any) => !m.read).length;

  const stats = [
    { title: "Blog Posts", value: blogPosts.length, icon: FileText, color: "bg-blue-500" },
    { title: "Projects", value: projects.length, icon: Briefcase, color: "bg-green-500" },
    { title: "Skills", value: skills.length, icon: Zap, color: "bg-yellow-500" },
    { title: "Messages", value: unreadMessages, icon: Mail, color: "bg-red-500" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back, {user?.name}. Manage your portfolio content here.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className={`${stat.color} p-3 rounded-lg text-white`}>
                    <stat.icon size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Blog Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Blog Posts</CardTitle>
              <CardDescription>Latest 5 blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.slice(0, 5).map((post: any) => (
                  <div key={post.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="text-sm text-muted-foreground">{post.category}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                ))}
                {blogPosts.length === 0 && <p className="text-muted-foreground">No blog posts yet</p>}
              </div>
            </CardContent>
          </Card>

          {/* Recent Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Latest 5 projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.slice(0, 5).map((project: any) => (
                  <div key={project.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-muted-foreground">{project.company}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${project.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                      {project.published ? "Published" : "Draft"}
                    </span>
                  </div>
                ))}
                {projects.length === 0 && <p className="text-muted-foreground">No projects yet</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Latest contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages.slice(0, 5).map((message: any) => (
                <div key={message.id} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div>
                    <p className="font-medium">{message.name}</p>
                    <p className="text-sm text-muted-foreground">{message.subject}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${!message.read ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                    {!message.read ? "Unread" : "Read"}
                  </span>
                </div>
              ))}
              {messages.length === 0 && <p className="text-muted-foreground">No messages yet</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
