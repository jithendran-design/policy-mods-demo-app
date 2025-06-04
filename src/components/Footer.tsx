
import { Shield, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400 mr-2" />
              <div>
                <h3 className="text-xl font-bold">SecureGuard</h3>
                <p className="text-sm text-gray-400">Financial Services</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Protecting what matters most to you with comprehensive insurance solutions and financial services since 1985.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Insurance Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Auto Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Home Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Life Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Health Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Business Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">File a Claim</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Policy Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Payment Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Agent</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Forms & Documents</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">
                  123 Financial District<br />
                  New York, NY 10004
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">1-800-SECURE (732-8731)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">support@secureguard.com</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-400">
                  <strong>24/7 Claims Hotline:</strong><br />
                  1-800-CLAIMS (252-4637)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 SecureGuard Financial Services. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          <p>
            SecureGuard Financial Services is licensed to sell insurance in all 50 states. 
            Securities offered through SecureGuard Securities, LLC. Member FINRA/SIPC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
