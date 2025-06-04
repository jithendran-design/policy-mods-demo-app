
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PersonalInformationStep } from "@/components/quote-form/PersonalInformationStep";
import { VehicleDetailsStep } from "@/components/quote-form/VehicleDetailsStep";
import { HealthCoverageStep } from "@/components/quote-form/HealthCoverageStep";
import { CoverageOptionsStep } from "@/components/quote-form/CoverageOptionsStep";
import { ReviewStep } from "@/components/quote-form/ReviewStep";

const QuoteForm = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const getInsuranceTitle = (type: string) => {
    const titles: { [key: string]: string } = {
      auto: "Auto Insurance",
      home: "Home Insurance", 
      health: "Health Insurance",
      life: "Life Insurance",
      business: "Business Insurance"
    };
    return titles[type] || "Insurance";
  };

  const getSteps = (type: string) => {
    switch (type) {
      case "auto":
        return ["Personal Information", "Vehicle Details", "Coverage Options", "Review & Quote"];
      case "home":
        return ["Personal Information", "Property Details", "Coverage Options", "Review & Quote"];
      case "health":
        return ["Personal Information", "Health & Coverage", "Review & Quote"];
      case "life":
        return ["Personal Information", "Health & Lifestyle", "Coverage Amount", "Review & Quote"];
      case "business":
        return ["Personal Information", "Business Details", "Coverage Needs", "Review & Quote"];
      default:
        return ["Personal Information", "Coverage Details", "Review & Quote"];
    }
  };

  const steps = getSteps(type || "");
  const totalSteps = steps.length;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/proposal", { state: { formData, insuranceType: type } });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return <PersonalInformationStep formData={formData} onInputChange={handleInputChange} />;
    }
    
    if (currentStep === 2) {
      if (type === "auto") {
        return <VehicleDetailsStep formData={formData} onInputChange={handleInputChange} />;
      }
      if (type === "health") {
        return <HealthCoverageStep formData={formData} onInputChange={handleInputChange} />;
      }
      return <CoverageOptionsStep formData={formData} onInputChange={handleInputChange} />;
    }
    
    if (currentStep === 3) {
      if (type === "auto") {
        return <CoverageOptionsStep formData={formData} onInputChange={handleInputChange} />;
      }
      if (type === "health") {
        return <ReviewStep formData={formData} insuranceType={type} />;
      }
      return <ReviewStep formData={formData} insuranceType={type} />;
    }
    
    if (currentStep === 4) {
      return <ReviewStep formData={formData} insuranceType={type} />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl border-0 overflow-hidden rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-white p-8">
              <CardTitle className="text-2xl font-bold mb-6">{getInsuranceTitle(type || "")} Quote</CardTitle>
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium">Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}</span>
                  <span className="font-medium">{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8 bg-white">
              {renderStepContent()}
              
              <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="flex items-center px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {currentStep === 1 ? "Back to Home" : "Previous"}
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white shadow-lg rounded-lg"
                >
                  {currentStep === totalSteps ? "Generate Quote" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default QuoteForm;
