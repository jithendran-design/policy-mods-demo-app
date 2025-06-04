import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Car, HeartPulse, Briefcase, User, Users } from "lucide-react";

interface InsuranceOption {
  type: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  flow?: 'simple' | 'detailed';
}

const Index = () => {
  const navigate = useNavigate();
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null);

  const insuranceOptions: InsuranceOption[] = [
    {
      type: "home",
      title: "Home Insurance",
      description: "Protect your home and belongings with comprehensive coverage.",
      icon: <Home className="w-6 h-6" />,
    },
    {
      type: "auto",
      title: "Auto Insurance",
      description: "Get the right auto insurance coverage for your needs.",
      icon: <Car className="w-6 h-6" />,
    },
    {
      type: "health",
      title: "Health Insurance",
      description: "Find the perfect health insurance plan for you and your family.",
      icon: <HeartPulse className="w-6 h-6" />,
    },
    {
      type: "life",
      title: "Life Insurance",
      description: "Secure your family's future with a life insurance policy.",
      icon: <User className="w-6 h-6" />,
    },
    {
      type: "business",
      title: "Business Insurance",
      description: "Protect your business from unexpected events and liabilities.",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const handleInsuranceSelect = (type: string, flow?: 'simple' | 'detailed') => {
    setSelectedInsurance(type);
    if (type === "health" && flow) {
      navigate(`/quote/${type}?flow=${flow}`);
    } else {
      navigate(`/quote/${type}`);
    }
  };

  const renderHealthFlowOptions = () => {
    return (
      <div className="mt-4 space-y-3">
        <p className="text-sm text-gray-600 mb-3">Choose your coverage type:</p>
        <div className="grid gap-3">
          <Button
            onClick={() => handleInsuranceSelect("health", "simple")}
            data-testid="health-simple-flow-btn"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <User className="w-4 h-4" />
            <span>Self</span>
          </Button>
          <Button
            onClick={() => handleInsuranceSelect("health", "detailed")}
            data-testid="health-detailed-flow-btn"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
          >
            <Users className="w-4 h-4" />
            <span>Family</span>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-purple-100">
      <Header />

      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Get a Quick Insurance Quote
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceOptions.map((option) => (
              <Card
                key={option.type}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-2xl cursor-pointer"
                onClick={() =>
                  option.type === "health" && !selectedInsurance
                    ? setSelectedInsurance(option.type)
                    : handleInsuranceSelect(option.type)
                }
                data-testid={`insurance-card-${option.type}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold flex items-center space-x-2">
                    {option.icon}
                    <span>{option.title}</span>
                  </CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Get a Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedInsurance === "health" && renderHealthFlowOptions()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
