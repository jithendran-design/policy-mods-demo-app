
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Car, Home, Heart, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const insuranceTypes = [
    {
      id: "auto",
      title: "Auto Insurance",
      description: "Protect your vehicle with comprehensive coverage",
      icon: Car,
      color: "bg-blue-500"
    },
    {
      id: "home",
      title: "Home Insurance", 
      description: "Secure your home and belongings",
      icon: Home,
      color: "bg-green-500"
    },
    {
      id: "health",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: Heart,
      color: "bg-red-500"
    },
    {
      id: "life",
      title: "Life Insurance",
      description: "Financial protection for your loved ones",
      icon: Shield,
      color: "bg-purple-500"
    },
    {
      id: "business",
      title: "Business Insurance",
      description: "Protect your business operations and assets",
      icon: Briefcase,
      color: "bg-orange-500"
    }
  ];

  const handleInsuranceSelect = (type: string) => {
    navigate(`/quote/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">SecureGuard Insurance</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized insurance quotes in minutes. Choose from our comprehensive range of coverage options.
          </p>
        </div>

        {/* Insurance Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {insuranceTypes.map((insurance) => {
            const IconComponent = insurance.icon;
            return (
              <Card 
                key={insurance.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 flex flex-col h-full"
                onClick={() => handleInsuranceSelect(insurance.id)}
              >
                <CardHeader className="text-center flex-grow">
                  <div className={`${insurance.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{insurance.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {insurance.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose SecureGuard?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600">Tailored policies to meet your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">24/7</span>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">$</span>
              </div>
              <h3 className="font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">Best value for your money</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
