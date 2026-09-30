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

export default function AdminBlog() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: 5,
    published: 0,
  });

  // Redirect if not admin
  useEffect(() => {
    if (isAuthenticated && user?.role !== "admin") {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  const { data: posts = [], refetch } = trpc.blog.all.useQuery();
  const createMutation = trpc.blog.create.useMutation();
  const updateMutation = trpc.blog.update.useMutation();
  const deleteMutation = trpc.blog.delete.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateMutation.mutateAsync({ id: editingId, ...formData });
        toast.success("Blog post updated successfully");
      } else {
        await createMutation.mutateAsync(formData);
        toast.success("Blog post created successfully");
      }
      setIsOpen(false);
      setEditingId(null);
      setFormData({ title: "", slug: "", excerpt: "", content: "", category: "", readTime: 5, published: 0 });
      refetch();
    } catch (error) {
      toast.error("Failed to save blog post");
    }
  };

  const handleEdit = (post: any) => {
    setFormData(post);
    setEditingId(post.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        await deleteMutation.mutateAsync({ id });
        toast.success("Blog post deleted successfully");
        refetch();
      } catch (error) {
        toast.error("Failed to delete blog post");
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Blog Management</h1>
            <p className="text-muted-foreground mt-2">Create and manage your blog posts</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button onClick={() => { setEditingId(null); setFormData({ title: "", slug: "", excerpt: "", content: "", category: "", readTime: 5, published: 0 }); }}>
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Blog Post" : "Create Blog Post"}</DialogTitle>
                <DialogDescription>Fill in the details for your blog post</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Blog post title"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Slug</label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="blog-post-slug"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Input
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="AI/ML, Mobile Development, etc."
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Excerpt</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief description"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Content</label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Full blog content"
                    rows={6}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Read Time (minutes)</label>
                    <Input
                      type="number"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: parseInt(e.target.value) })}
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
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button type="submit">{editingId ? "Update" : "Create"}</Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Blog Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Blog Posts</CardTitle>
            <CardDescription>Manage your blog posts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {posts.map((post: any) => (
                <div key={post.id} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex-1">
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.category} • {post.readTime} min read</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(post)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
              {posts.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No blog posts yet. Create one to get started!</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
