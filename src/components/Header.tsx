
import { Shield, Phone, Mail, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
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
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-200">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <span className="text-blue-200">|</span>
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-200">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-10 w-10 text-blue-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SecureGuard</h1>
              <p className="text-sm text-gray-600">Financial Services</p>
            </div>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Insurance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-96">
                    <div className="grid gap-3">
                      <div className="text-sm font-medium text-gray-900 mb-2">Personal Insurance</div>
                      <div className="grid gap-1">
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Auto Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Home Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Life Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Health Insurance</a>
                      </div>
                      <div className="text-sm font-medium text-gray-900 mb-2 mt-4">Business Insurance</div>
                      <div className="grid gap-1">
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">General Liability</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Commercial Property</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Banking</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <div className="grid gap-1">
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Checking Accounts</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Savings Accounts</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Credit Cards</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600">Loans</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">About Us</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            <Button className="bg-blue-600 hover:bg-blue-700 hidden md:inline-flex">
              Get a Quote
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
