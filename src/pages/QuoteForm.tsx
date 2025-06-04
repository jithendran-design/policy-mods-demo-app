
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const QuoteForm = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
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
    const commonSteps = ["Personal Information", "Coverage Details", "Review & Quote"];
    
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
        return commonSteps;
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
      // Generate quote
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

  const renderPersonalInformation = () => (
    <div className="space-y-6 min-h-[400px]">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={formData.firstName || ""}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName || ""}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            value={formData.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
          <Input
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-gray-700 font-medium">Address</Label>
        <Input
          id="address"
          placeholder="123 Main St, City, State 12345"
          value={formData.address || ""}
          onChange={(e) => handleInputChange("address", e.target.value)}
          className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="text-gray-700 font-medium">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ""}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-gray-700 font-medium">Gender</Label>
          <Select onValueChange={(value) => handleInputChange("gender", value)}>
            <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderHealthAndCoverage = () => (
    <div className="space-y-8 min-h-[400px]">
      <div className="bg-blue-50 p-6 rounded-lg border border-[#3C71DD]/20">
        <h3 className="text-xl font-semibold text-[#3C71DD] mb-6">Health Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="height" className="text-gray-700 font-medium">Height</Label>
            <Input
              id="height"
              placeholder="5'8&quot;"
              value={formData.height || ""}
              onChange={(e) => handleInputChange("height", e.target.value)}
              className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-gray-700 font-medium">Weight</Label>
            <Input
              id="weight"
              placeholder="150 lbs"
              value={formData.weight || ""}
              onChange={(e) => handleInputChange("weight", e.target.value)}
              className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="smokingStatus" className="text-gray-700 font-medium">Smoking Status</Label>
            <Select onValueChange={(value) => handleInputChange("smokingStatus", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                <SelectValue placeholder="Select smoking status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="never">Never smoked</SelectItem>
                <SelectItem value="former">Former smoker</SelectItem>
                <SelectItem value="current">Current smoker</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="medicalConditions" className="text-gray-700 font-medium">Pre-existing Medical Conditions</Label>
            <Select onValueChange={(value) => handleInputChange("medicalConditions", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                <SelectValue placeholder="Select if applicable" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="diabetes">Diabetes</SelectItem>
                <SelectItem value="heart">Heart condition</SelectItem>
                <SelectItem value="other">Other (please specify)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Preferences</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="coverageLevel" className="text-gray-700 font-medium">Coverage Level</Label>
            <Select onValueChange={(value) => handleInputChange("coverageLevel", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                <SelectValue placeholder="Select coverage level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Coverage</SelectItem>
                <SelectItem value="standard">Standard Coverage</SelectItem>
                <SelectItem value="premium">Premium Coverage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="deductible" className="text-gray-700 font-medium">Deductible</Label>
            <Select onValueChange={(value) => handleInputChange("deductible", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                <SelectValue placeholder="Select deductible" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="250">$250</SelectItem>
                <SelectItem value="500">$500</SelectItem>
                <SelectItem value="1000">$1,000</SelectItem>
                <SelectItem value="2500">$2,500</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAutoDetails = () => (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-blue-50 p-6 rounded-lg border border-[#3C71DD]/20">
        <h3 className="text-xl font-semibold text-[#3C71DD] mb-6">Vehicle Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="vehicleYear" className="text-gray-700 font-medium">Vehicle Year</Label>
            <Select onValueChange={(value) => handleInputChange("vehicleYear", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicleMake" className="text-gray-700 font-medium">Make</Label>
            <Input
              id="vehicleMake"
              placeholder="Toyota"
              value={formData.vehicleMake || ""}
              onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
              className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="vehicleModel" className="text-gray-700 font-medium">Model</Label>
            <Input
              id="vehicleModel"
              placeholder="Camry"
              value={formData.vehicleModel || ""}
              onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
              className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vin" className="text-gray-700 font-medium">VIN</Label>
            <Input
              id="vin"
              placeholder="1HGBH41JXMN109186"
              value={formData.vin || ""}
              onChange={(e) => handleInputChange("vin", e.target.value)}
              className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]"
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label htmlFor="annualMileage" className="text-gray-700 font-medium">Annual Mileage</Label>
          <Select onValueChange={(value) => handleInputChange("annualMileage", value)}>
            <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
              <SelectValue placeholder="Select annual mileage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5000">Less than 5,000 miles</SelectItem>
              <SelectItem value="10000">5,000 - 10,000 miles</SelectItem>
              <SelectItem value="15000">10,000 - 15,000 miles</SelectItem>
              <SelectItem value="20000">15,000 - 20,000 miles</SelectItem>
              <SelectItem value="25000">More than 20,000 miles</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderCoverageOptions = () => (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Options</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="coverageLevel" className="text-gray-700 font-medium">Coverage Level</Label>
            <Select onValueChange={(value) => handleInputChange("coverageLevel", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                <SelectValue placeholder="Select coverage level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Coverage</SelectItem>
                <SelectItem value="standard">Standard Coverage</SelectItem>
                <SelectItem value="premium">Premium Coverage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="deductible" className="text-gray-700 font-medium">Deductible</Label>
              <Select onValueChange={(value) => handleInputChange("deductible", value)}>
                <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                  <SelectValue placeholder="Select deductible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="250">$250</SelectItem>
                  <SelectItem value="500">$500</SelectItem>
                  <SelectItem value="1000">$1,000</SelectItem>
                  <SelectItem value="2500">$2,500</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="coverageAmount" className="text-gray-700 font-medium">Coverage Amount</Label>
              <Select onValueChange={(value) => handleInputChange("coverageAmount", value)}>
                <SelectTrigger className="border-gray-300 focus:border-[#3C71DD] focus:ring-[#3C71DD]">
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50000">$50,000</SelectItem>
                  <SelectItem value="100000">$100,000</SelectItem>
                  <SelectItem value="250000">$250,000</SelectItem>
                  <SelectItem value="500000">$500,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-[#3C71DD]/20">
        <h3 className="text-xl font-semibold text-[#3C71DD] mb-6">Review Your Information</h3>
        <div className="bg-white p-6 rounded-lg space-y-4 shadow-sm">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-900">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-gray-900">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Phone:</span>
                <span className="text-gray-900">{formData.phone}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Address:</span>
                <span className="text-gray-900 text-right">{formData.address}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Coverage Level:</span>
                <span className="text-gray-900 capitalize">{formData.coverageLevel}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Deductible:</span>
                <span className="text-gray-900">${formData.deductible}</span>
              </div>
            </div>
          </div>
          
          {type === "auto" && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Vehicle Details</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Vehicle:</span>
                  <span className="text-gray-900">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Annual Mileage:</span>
                  <span className="text-gray-900">{formData.annualMileage} miles</span>
                </div>
              </div>
            </div>
          )}
          
          {type === "health" && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-3">Health Information</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Height:</span>
                    <span className="text-gray-900">{formData.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Weight:</span>
                    <span className="text-gray-900">{formData.weight}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Smoking Status:</span>
                    <span className="text-gray-900 capitalize">{formData.smokingStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Medical Conditions:</span>
                    <span className="text-gray-900 capitalize">{formData.medicalConditions}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    if (currentStep === 1) return renderPersonalInformation();
    if (currentStep === 2) {
      if (type === "auto") return renderAutoDetails();
      if (type === "health") return renderHealthAndCoverage();
      return renderCoverageOptions();
    }
    if (currentStep === 3) {
      if (type === "auto") return renderCoverageOptions();
      if (type === "health") return renderReview();
      return renderReview();
    }
    if (currentStep === 4) return renderReview();
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#3C71DD] to-[#2F5FC7] text-white">
              <CardTitle className="text-2xl font-bold">{getInsuranceTitle(type || "")} Quote</CardTitle>
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-3">
                  <span className="font-medium">Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}</span>
                  <span className="font-medium">{Math.round(progress)}% Complete</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              {renderStepContent()}
              
              <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  className="flex items-center px-6 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {currentStep === 1 ? "Back to Home" : "Previous"}
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex items-center px-8 py-3 bg-[#3C71DD] hover:bg-[#2F5FC7] text-white shadow-lg"
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
