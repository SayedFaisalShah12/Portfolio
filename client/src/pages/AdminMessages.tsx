import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { trpc } from "@/lib/trpc";
import { Trash2, Eye } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function AdminMessages() {
  const { user, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  // Redirect if not admin
  useEffect(() => {
    if (isAuthenticated && user?.role !== "admin") {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  const { data: messages = [], refetch } = trpc.messages.list.useQuery();
  const markAsReadMutation = trpc.messages.markAsRead.useMutation();
  const deleteMutation = trpc.messages.delete.useMutation();

  const handleMarkAsRead = async (id: number) => {
    try {
      await markAsReadMutation.mutateAsync({ id });
      toast.success("Message marked as read");
      refetch();
    } catch (error) {
      toast.error("Failed to mark message as read");
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteMutation.mutateAsync({ id });
        toast.success("Message deleted successfully");
        refetch();
      } catch (error) {
        toast.error("Failed to delete message");
      }
    }
  };

  const unreadCount = messages.filter((m: any) => !m.read).length;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Contact Messages</h1>
          <p className="text-muted-foreground mt-2">View and manage contact form submissions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{messages.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unread</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{unreadCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Read</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{messages.length - unreadCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Messages List */}
        <Card>
          <CardHeader>
            <CardTitle>All Messages</CardTitle>
            <CardDescription>Contact form submissions from your portfolio visitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {messages.map((message: any) => (
                <div key={message.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${!message.read ? "bg-blue-500" : "bg-gray-300"}`} />
                      <div>
                        <h3 className="font-medium">{message.name}</h3>
                        <p className="text-sm text-muted-foreground">{message.subject}</p>
                        <p className="text-xs text-muted-foreground mt-1">{message.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedMessage(message);
                        if (!message.read) {
                          handleMarkAsRead(message.id);
                        }
                      }}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(message.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
              {messages.length === 0 && (
                <p className="text-center text-muted-foreground py-8">No messages yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Message Detail Dialog */}
        {selectedMessage && (
          <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedMessage.subject}</DialogTitle>
                <DialogDescription>From: {selectedMessage.name} ({selectedMessage.email})</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Message</p>
                  <p className="mt-2 whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
                <div className="text-xs text-muted-foreground">
                  Received on {new Date(selectedMessage.createdAt).toLocaleString()}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </DashboardLayout>
  );
}
