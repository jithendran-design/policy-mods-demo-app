
import { Shield, Phone, Mail, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b border-primary/20">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>1-800-SECURE (1-800-732-8731)</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@secureguard.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:text-white/90 hover:bg-primary/80">
                    <User className="h-4 w-4 mr-2" />
                    {user.email}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => navigate("/")}>
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-white/90 hover:bg-primary/80"
                  onClick={() => navigate("/auth")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <span className="text-white/70">|</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white hover:text-white/90 hover:bg-primary/80"
                  onClick={() => navigate("/auth")}
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <Shield className="h-10 w-10 text-primary mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SecureGuard</h1>
              <p className="text-sm text-gray-600">Financial Services</p>
            </div>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary">Insurance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-96">
                    <div className="grid gap-3">
                      <div className="text-sm font-medium text-gray-900 mb-2">Personal Insurance</div>
                      <div className="grid gap-1">
                        <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Auto Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Home Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Life Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Health Insurance</a>
                      </div>
                      <div className="text-sm font-medium text-gray-900 mb-2 mt-4">Business Insurance</div>
                      <div className="grid gap-1">
                        <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">General Liability</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Commercial Property</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-primary">Banking</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <div className="grid gap-1">
                      <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Checking Accounts</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Savings Accounts</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Credit Cards</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Loans</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="hover:text-primary">About Us</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="hover:text-primary">Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white hidden md:inline-flex shadow-lg rounded-lg"
              onClick={() => navigate("/")}
            >
              Get a Quote
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-primary text-primary hover:bg-primary hover:text-white">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
