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

  const handleGetQuote = (flowType?: string) => {
    if (selectedInsurance === "health" && flowType) {
      navigate(`/quote/${selectedInsurance}?flow=${flowType}`);
    } else {
      navigate(`/quote/${selectedInsurance}`);
    }
  };

  const handleHealthFlowSelect = (flowType: string) => {
    handleGetQuote(flowType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-purple-100">
      <Header selectedInsurance={selectedInsurance} />
      
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
                className={`cursor-pointer transition-all duration-300 border-2 rounded-3xl ${
                  isSelected 
                    ? 'border-primary/60 bg-white shadow-xl shadow-primary/20 ring-4 ring-primary/10' 
                    : 'border-gray-200/50 hover:border-primary/30 hover:shadow-lg hover:shadow-gray-200/50 bg-white/80 backdrop-blur-sm'
                } transform hover:scale-[1.02] hover:-translate-y-1`}
                onClick={() => handleInsuranceSelect(insurance.id)}
                data-testid={`insurance-card-${insurance.id}`}
              >
                <CardHeader className="pb-4 relative">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-primary to-purple-600 scale-110' 
                          : 'bg-gradient-to-br from-primary/90 to-purple-500'
                      }`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 font-bold">{insurance.title}</CardTitle>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      isSelected 
                        ? 'border-primary bg-primary shadow-lg' 
                        : 'border-gray-300'
                    } flex items-center justify-center`}>
                      {isSelected && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {insurance.description}
                  </CardDescription>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-gray-900">
                      Starting at {insurance.startingPrice}
                      <span className="text-base font-normal text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {insurance.coverage}
                    </div>
                  </div>
                  
                  {insurance.id === "health" && isSelected && (
                    <div className="mt-6 space-y-3">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Choose Your Flow:</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleHealthFlowSelect("simple");
                          }}
                          data-testid="health-simple-flow-btn"
                          variant="outline"
                          size="sm"
                          className="text-xs px-3 py-2 border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          For Self
                        </Button>
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleHealthFlowSelect("detailed");
                          }}
                          data-testid="health-detailed-flow-btn"
                          variant="outline"
                          size="sm"
                          className="text-xs px-3 py-2 border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          For Family
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {insurance.id !== "health" && (
                    <div className="mt-6">
                      <button className={`text-sm font-semibold flex items-center transition-all duration-200 ${
                        isSelected 
                          ? 'text-primary hover:text-primary/80' 
                          : 'text-primary/80 hover:text-primary'
                      }`}>
                        Compare plans <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Get Quote Button - Only show for non-health insurance */}
        {selectedInsurance !== "health" && (
          <div className="text-center mb-16">
            <Button 
              onClick={() => handleGetQuote()}
              data-testid="main-get-quote-btn"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg rounded-lg"
            >
              Get Quote for {insuranceTypes.find(i => i.id === selectedInsurance)?.title}
            </Button>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-gray-100/50">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Why Choose SecureGuard?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Comprehensive Coverage</h3>
              <p className="text-gray-600">Tailored policies to meet your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">24/7</span>
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer service</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary/10 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
