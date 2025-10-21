import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User as UserIcon, ShoppingBag, Heart, LogOut, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { User } from "@supabase/supabase-js";

const UserDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been logged out successfully.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserIcon className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-serif font-bold text-gradient-silk">My Account</h1>
              <p className="text-sm text-muted-foreground">T.Gopi Textiles</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card className="gradient-card shadow-dramatic animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                My Orders
              </CardTitle>
              <CardDescription>Track your purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gradient-silk">0</p>
              <p className="text-sm text-muted-foreground mt-2">No orders yet</p>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-dramatic animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Wishlist
              </CardTitle>
              <CardDescription>Your favorites</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-gradient-silk">0</p>
              <p className="text-sm text-muted-foreground mt-2">No items saved</p>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-dramatic animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-primary" />
                Profile
              </CardTitle>
              <CardDescription>Account details</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Active account</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-dramatic animate-fade-in-up">
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
            <CardDescription>
              Thank you for being a valued customer of T.Gopi Textiles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-lg">
                <UserIcon className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium">Account Active</p>
                  <p className="text-sm text-muted-foreground">
                    Email: {user?.email}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Explore our exclusive collection of silk sarees, cotton sarees, and dress materials.
                Your order history and preferences will be saved here.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default UserDashboard;
