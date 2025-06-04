
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Car, Home, Heart, Briefcase, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const [selectedInsurance, setSelectedInsurance] = useState<string>("auto");
  
  const insuranceTypes = [
    {
      id: "auto",
      title: "Auto Insurance",
      description: "Protect your vehicle with comprehensive coverage",
      icon: Car,
      startingPrice: "$89",
      coverage: "Up to $1M coverage"
    },
    {
      id: "home",
      title: "Home Insurance", 
      description: "Secure your home and belongings",
      icon: Home,
      startingPrice: "$156",
      coverage: "Up to $2M coverage"
    },
    {
      id: "health",
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: Heart,
      startingPrice: "$299",
      coverage: "Individual & Family plans"
    },
    {
      id: "life",
      title: "Life Insurance",
      description: "Financial protection for your loved ones",
      icon: Shield,
      startingPrice: "$45",
      coverage: "Up to $5M coverage"
    },
    {
      id: "business",
      title: "Business Insurance",
      description: "Protect your business operations and assets",
      icon: Briefcase,
      startingPrice: "$199",
      coverage: "Comprehensive business protection"
    }
  ];

  const handleInsuranceSelect = (type: string) => {
    setSelectedInsurance(type);
  };

  const handleGetQuote = () => {
    navigate(`/quote/${selectedInsurance}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-blue-50">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {insuranceTypes.map((insurance) => {
            const IconComponent = insurance.icon;
            const isSelected = selectedInsurance === insurance.id;
            return (
              <Card 
                key={insurance.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  isSelected 
                    ? 'border-primary bg-purple-50 shadow-lg' 
                    : 'border-gray-200 hover:border-primary/40 hover:shadow-md'
                }`}
                onClick={() => handleInsuranceSelect(insurance.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-900">{insurance.title}</CardTitle>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      isSelected 
                        ? 'border-primary bg-primary' 
                        : 'border-gray-300'
                    } flex items-center justify-center`}>
                      {isSelected && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4">
                    {insurance.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-gray-900">
                      Starting at {insurance.startingPrice}
                      <span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {insurance.coverage}
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="text-primary text-sm font-medium flex items-center hover:text-primary/80 transition-colors">
                      Compare plans <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Get Quote Button */}
        <div className="text-center mb-16">
          <Button 
            onClick={handleGetQuote}
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 text-lg rounded-lg transition-colors duration-200"
          >
            Get Quote for {insuranceTypes.find(i => i.id === selectedInsurance)?.title}
          </Button>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-xl p-8 border border-primary/10">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Choose SecureGuard?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Comprehensive Coverage</h3>
              <p className="text-gray-600">Tailored policies to meet your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">24/7</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">$</span>
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
