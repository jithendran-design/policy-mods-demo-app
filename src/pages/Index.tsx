
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Car, Home, Heart, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  
  const insuranceTypes = [
    {
      id: "auto",
      title: "Auto Insurance",
      description: "Protect your vehicle with comprehensive coverage",
      icon: Car,
      color: "bg-[#3CA7DD]"
    },
    {
      id: "home",
      title: "Home Insurance", 
      description: "Secure your home and belongings",
      icon: Home,
      color: "bg-[#4FB3E1]"
    },
    {
      id: "health",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: Heart,
      color: "bg-[#62BFE5]"
    },
    {
      id: "life",
      title: "Life Insurance",
      description: "Financial protection for your loved ones",
      icon: Shield,
      color: "bg-[#75CBE9]"
    },
    {
      id: "business",
      title: "Business Insurance",
      description: "Protect your business operations and assets",
      icon: Briefcase,
      color: "bg-[#88D7ED]"
    }
  ];

  const handleInsuranceSelect = (type: string) => {
    navigate(`/quote/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4FD] to-[#D1E9FB]">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Insurance Quote Today
          </h1>
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
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 flex flex-col h-full border-[#3CA7DD]/20 hover:border-[#3CA7DD]/40"
                onClick={() => handleInsuranceSelect(insurance.id)}
              >
                <CardHeader className="text-center flex-grow">
                  <div className={`${insurance.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{insurance.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {insurance.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button className="w-full bg-[#3CA7DD] hover:bg-[#2E8BC7] text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-xl p-8 border border-[#3CA7DD]/10">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Choose SecureGuard?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#3CA7DD]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#3CA7DD]" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Comprehensive Coverage</h3>
              <p className="text-gray-600">Tailored policies to meet your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-[#4FB3E1]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#4FB3E1] font-bold text-lg">24/7</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
            <div className="text-center">
              <div className="bg-[#62BFE5]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#62BFE5] font-bold text-xl">$</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Competitive Rates</h3>
              <p className="text-gray-600">Best value for your money</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
