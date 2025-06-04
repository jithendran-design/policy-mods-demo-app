
import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PersonalInformationStep } from "@/components/quote-form/PersonalInformationStep";
import { VehicleDetailsStep } from "@/components/quote-form/VehicleDetailsStep";
import { HealthCoverageStep } from "@/components/quote-form/HealthCoverageStep";
import { MedicalHistoryStep } from "@/components/quote-form/MedicalHistoryStep";
import { CoveragePreferencesStep } from "@/components/quote-form/CoveragePreferencesStep";
import { FamilyMembersStep } from "@/components/quote-form/FamilyMembersStep";
import { CoverageOptionsStep } from "@/components/quote-form/CoverageOptionsStep";
import { ReviewStep } from "@/components/quote-form/ReviewStep";

const QuoteForm = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({});
  
  const flowType = searchParams.get("flow");
  const isDetailedFlow = flowType === "detailed";

  useEffect(() => {
    // Store flow type in form data for later use
    if (flowType) {
      setFormData(prev => ({ ...prev, flowType }));
    }
  }, [flowType]);

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
        if (isDetailedFlow) {
          return ["Personal Information", "Medical History", "Coverage Preferences", "Family Members", "Review & Quote"];
        }
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

  const handleInputChange = (field: string, value: string | any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value
    }));
  };

  const shouldShowFamilyStep = () => {
    return type === "health" && isDetailedFlow && formData.planType === "family";
  };

  const handleNext = () => {
    // For detailed health flow, check if we should skip family step
    if (type === "health" && isDetailedFlow && currentStep === 3 && !shouldShowFamilyStep()) {
      setCurrentStep(5); // Skip to review step
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/proposal", { state: { formData, insuranceType: type } });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      // For detailed health flow, check if we need to skip back over family step
      if (type === "health" && isDetailedFlow && currentStep === 5 && !shouldShowFamilyStep()) {
        setCurrentStep(3); // Skip back to coverage preferences
      } else {
        setCurrentStep(currentStep - 1);
      }
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
        if (isDetailedFlow) {
          return <MedicalHistoryStep formData={formData} onInputChange={handleInputChange} />;
        }
        return <HealthCoverageStep formData={formData} onInputChange={handleInputChange} />;
      }
      return <CoverageOptionsStep formData={formData} onInputChange={handleInputChange} />;
    }
    
    if (currentStep === 3) {
      if (type === "auto") {
        return <CoverageOptionsStep formData={formData} onInputChange={handleInputChange} />;
      }
      if (type === "health") {
        if (isDetailedFlow) {
          return <CoveragePreferencesStep formData={formData} onInputChange={handleInputChange} />;
        }
        return <ReviewStep formData={formData} insuranceType={type} />;
      }
      return <ReviewStep formData={formData} insuranceType={type} />;
    }
    
    if (currentStep === 4) {
      if (type === "health" && isDetailedFlow) {
        return <FamilyMembersStep formData={formData} onInputChange={handleInputChange} />;
      }
      return <ReviewStep formData={formData} insuranceType={type} />;
    }
    
    if (currentStep === 5) {
      return <ReviewStep formData={formData} insuranceType={type} />;
    }
    
    return null;
  };

  const getNextButtonText = () => {
    if (currentStep === totalSteps) {
      return "Generate Quote";
    }
    if (type === "health" && isDetailedFlow && currentStep === 3 && !shouldShowFamilyStep()) {
      return "Skip to Review";
    }
    return isDetailedFlow ? "Next Step" : "Continue";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-purple-100">
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl border-0 overflow-hidden rounded-2xl" data-testid="quote-form-card">
            <CardHeader className="bg-gradient-to-r from-primary to-purple-600 text-white p-8">
              <CardTitle className="text-2xl font-bold mb-6">
                {getInsuranceTitle(type || "")} Quote
                {type === "health" && flowType && (
                  <span className="text-sm font-normal ml-2 opacity-90" data-testid="flow-indicator">
                    ({flowType === "detailed" ? "Detailed" : "Simple"} Flow)
                  </span>
                )}
              </CardTitle>
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium" data-testid="step-indicator">
                    Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}
                  </span>
                  <span className="font-medium" data-testid="progress-indicator">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                    data-testid="progress-bar"
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
                  data-testid="previous-btn"
                  className="flex items-center px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {currentStep === 1 ? "Back to Home" : "Previous"}
                </Button>
                <Button
                  onClick={handleNext}
                  data-testid="next-btn"
                  className="flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white shadow-lg rounded-lg"
                >
                  {getNextButtonText()}
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
