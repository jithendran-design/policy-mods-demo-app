
import { Shield, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-purple-300 mr-2" />
              <div>
                <h3 className="text-xl font-bold">SecureGuard</h3>
                <p className="text-sm text-purple-200">Financial Services</p>
              </div>
            </div>
            <p className="text-purple-100 text-sm mb-4">
              Protecting what matters most to you with comprehensive insurance solutions and financial services since 1985.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-purple-200 hover:text-purple-300 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-purple-200 hover:text-purple-300 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-purple-200 hover:text-purple-300 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-purple-200 hover:text-purple-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Insurance Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Insurance Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Auto Insurance</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Home Insurance</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Life Insurance</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Health Insurance</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Business Insurance</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">File a Claim</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Policy Management</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Payment Center</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Contact Agent</a></li>
              <li><a href="#" className="text-purple-100 hover:text-purple-300 transition-colors">Forms & Documents</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-100">
                  123 Financial District<br />
                  New York, NY 10004
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-100">1-800-SECURE (732-8731)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-300" />
                <span className="text-purple-100">support@secureguard.com</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-purple-200">
                  <strong>24/7 Claims Hotline:</strong><br />
                  1-800-CLAIMS (252-4637)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-purple-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-200">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 SecureGuard Financial Services. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-purple-300 transition-colors">Accessibility</a>
          </div>
        </div>
        <div className="mt-4 text-xs text-purple-300">
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
