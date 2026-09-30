import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { trpc } from "@/lib/trpc";
import { Trash2, Edit, Plus } from "lucide-react";
import { toast } from "sonner";

export default function AdminProjects() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    technologies: "",
    features: "",
    projectLink: "",
    githubLink: "",
    imageUrl: "",
    published: 1,
  });

  // Redirect if not admin
  useEffect(() => {
    if (isAuthenticated && user?.role !== "admin") {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  const { data: projects = [], refetch } = trpc.projects.all.useQuery();
  const createMutation = trpc.projects.create.useMutation();
  const updateMutation = trpc.projects.update.useMutation();
  const deleteMutation = trpc.projects.delete.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateMutation.mutateAsync({ id: editingId, ...formData });
        toast.success("Project updated successfully");
      } else {
        await createMutation.mutateAsync(formData);
        toast.success("Project created successfully");
      }
      setIsOpen(false);
      setEditingId(null);
      setFormData({ title: "", description: "", company: "", technologies: "", features: "", projectLink: "", githubLink: "", imageUrl: "", published: 1 });
      refetch();
    } catch (error) {
      toast.error("Failed to save project");
    }
  };

  const handleEdit = (project: any) => {
    setFormData(project);
    setEditingId(project.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await deleteMutation.mutateAsync({ id });
        toast.success("Project deleted successfully");
        refetch();
      } catch (error) {
        toast.error("Failed to delete project");
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Projects Management</h1>
            <p className="text-muted-foreground mt-2">Create and manage your portfolio projects</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { setEditingId(null); setFormData({ title: "", description: "", company: "", technologies: "", features: "", projectLink: "", githubLink: "", imageUrl: "", published: 1 }); }}>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Project" : "Create Project"}</DialogTitle>
                <DialogDescription>Fill in the details for your project</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Project title"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Project description"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Technologies (comma-separated)</label>
                  <Input
                    value={formData.technologies}
                    onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                    placeholder="Flutter, Dart, Firebase"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Features (comma-separated)</label>
                  <Input
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                    placeholder="Feature 1, Feature 2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Project Link</label>
                    <Input
                      value={formData.projectLink}
                      onChange={(e) => setFormData({ ...formData, projectLink: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">GitHub Link</label>
                    <Input
                      value={formData.githubLink}
                      onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Image URL</label>
                  <Input
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    value={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value={0}>Draft</option>
                    <option value={1}>Published</option>
                  </select>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button type="submit">{editingId ? "Update" : "Create"}</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Projects Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>Manage your portfolio projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {projects.map((project: any) => (
                <div key={project.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex-1">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.company || "Personal Project"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${project.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                      {project.published ? "Published" : "Draft"}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(project)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
              {projects.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No projects yet. Create one to get started!</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
