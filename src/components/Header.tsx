
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
    <header className="bg-white shadow-sm border-b border-[#573CDD]/20">
      {/* Top Bar */}
      <div className="bg-[#573CDD] text-white py-2">
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
            <Button variant="ghost" size="sm" className="text-white hover:text-[#F3F1FF] hover:bg-[#4A2FC7]">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <span className="text-[#E8E4FF]">|</span>
            <Button variant="ghost" size="sm" className="text-white hover:text-[#F3F1FF] hover:bg-[#4A2FC7]">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-10 w-10 text-[#573CDD] mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SecureGuard</h1>
              <p className="text-sm text-gray-600">Financial Services</p>
            </div>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-[#573CDD]">Insurance</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-96">
                    <div className="grid gap-3">
                      <div className="text-sm font-medium text-gray-900 mb-2">Personal Insurance</div>
                      <div className="grid gap-1">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Auto Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Home Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Life Insurance</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Health Insurance</a>
                      </div>
                      <div className="text-sm font-medium text-gray-900 mb-2 mt-4">Business Insurance</div>
                      <div className="grid gap-1">
                        <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">General Liability</a>
                        <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Commercial Property</a>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-[#573CDD]">Banking</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-64">
                    <div className="grid gap-1">
                      <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Checking Accounts</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Savings Accounts</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Credit Cards</a>
                      <a href="#" className="text-sm text-gray-600 hover:text-[#573CDD] transition-colors">Loans</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="hover:text-[#573CDD]">About Us</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost" className="hover:text-[#573CDD]">Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-3">
            <Button className="bg-[#573CDD] hover:bg-[#4A2FC7] text-white hidden md:inline-flex">
              Get a Quote
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-[#573CDD] text-[#573CDD] hover:bg-[#573CDD] hover:text-white">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
