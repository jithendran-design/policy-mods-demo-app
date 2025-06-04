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
        return ["Personal Information", "Health Information", "Review & Quote"];
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
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={formData.firstName || ""}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName || ""}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            value={formData.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          placeholder="123 Main St, City, State 12345"
          value={formData.address || ""}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ""}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select onValueChange={(value) => handleInputChange("gender", value)}>
            <SelectTrigger>
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

  const renderHealthInformation = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            placeholder="5'8\""
            value={formData.height || ""}
            onChange={(e) => handleInputChange("height", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="weight">Weight</Label>
          <Input
            id="weight"
            placeholder="150 lbs"
            value={formData.weight || ""}
            onChange={(e) => handleInputChange("weight", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="smokingStatus">Smoking Status</Label>
        <Select onValueChange={(value) => handleInputChange("smokingStatus", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select smoking status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="never">Never smoked</SelectItem>
            <SelectItem value="former">Former smoker</SelectItem>
            <SelectItem value="current">Current smoker</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="medicalConditions">Pre-existing Medical Conditions</Label>
        <Select onValueChange={(value) => handleInputChange("medicalConditions", value)}>
          <SelectTrigger>
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

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="coverageLevel">Coverage Level</Label>
          <Select onValueChange={(value) => handleInputChange("coverageLevel", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select coverage level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Basic Coverage</SelectItem>
              <SelectItem value="standard">Standard Coverage</SelectItem>
              <SelectItem value="premium">Premium Coverage</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="deductible">Deductible</Label>
          <Select onValueChange={(value) => handleInputChange("deductible", value)}>
            <SelectTrigger>
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
  );

  const renderAutoDetails = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="vehicleYear">Vehicle Year</Label>
          <Select onValueChange={(value) => handleInputChange("vehicleYear", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="vehicleMake">Make</Label>
          <Input
            id="vehicleMake"
            placeholder="Toyota"
            value={formData.vehicleMake || ""}
            onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="vehicleModel">Model</Label>
          <Input
            id="vehicleModel"
            placeholder="Camry"
            value={formData.vehicleModel || ""}
            onChange={(e) => handleInputChange("vehicleModel", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="vin">VIN</Label>
          <Input
            id="vin"
            placeholder="1HGBH41JXMN109186"
            value={formData.vin || ""}
            onChange={(e) => handleInputChange("vin", e.target.value)}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="annualMileage">Annual Mileage</Label>
        <Select onValueChange={(value) => handleInputChange("annualMileage", value)}>
          <SelectTrigger>
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
  );

  const renderCoverageOptions = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="coverageLevel">Coverage Level</Label>
        <Select onValueChange={(value) => handleInputChange("coverageLevel", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select coverage level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic Coverage</SelectItem>
            <SelectItem value="standard">Standard Coverage</SelectItem>
            <SelectItem value="premium">Premium Coverage</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="deductible">Deductible</Label>
          <Select onValueChange={(value) => handleInputChange("deductible", value)}>
            <SelectTrigger>
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
        <div>
          <Label htmlFor="coverageAmount">Coverage Amount</Label>
          <Select onValueChange={(value) => handleInputChange("coverageAmount", value)}>
            <SelectTrigger>
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
  );

  const renderReview = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Review Your Information</h3>
      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
        <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
        <div><strong>Email:</strong> {formData.email}</div>
        <div><strong>Phone:</strong> {formData.phone}</div>
        <div><strong>Address:</strong> {formData.address}</div>
        {type === "auto" && (
          <>
            <div><strong>Vehicle:</strong> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</div>
            <div><strong>Annual Mileage:</strong> {formData.annualMileage} miles</div>
          </>
        )}
        {type === "health" && (
          <>
            <div><strong>Height:</strong> {formData.height}</div>
            <div><strong>Weight:</strong> {formData.weight}</div>
            <div><strong>Smoking Status:</strong> {formData.smokingStatus}</div>
            <div><strong>Medical Conditions:</strong> {formData.medicalConditions}</div>
          </>
        )}
        <div><strong>Coverage Level:</strong> {formData.coverageLevel}</div>
        <div><strong>Deductible:</strong> ${formData.deductible}</div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    if (currentStep === 1) return renderPersonalInformation();
    if (currentStep === 2) {
      if (type === "auto") return renderAutoDetails();
      if (type === "health") return renderHealthInformation();
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-xl">
          <CardHeader className="bg-blue-600 text-white">
            <CardTitle className="text-2xl">{getInsuranceTitle(type || "")} Quote</CardTitle>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Step {currentStep} of {totalSteps}: {steps[currentStep - 1]}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="bg-blue-500" />
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {currentStep === 1 ? "Back to Home" : "Previous"}
              </Button>
              <Button
                onClick={handleNext}
                className="flex items-center bg-blue-600 hover:bg-blue-700"
              >
                {currentStep === totalSteps ? "Generate Quote" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuoteForm;
