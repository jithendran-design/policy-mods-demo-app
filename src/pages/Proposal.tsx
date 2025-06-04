
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Check, Download, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Proposal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { formData, insuranceType } = location.state || {};

  if (!formData || !insuranceType) {
    navigate("/");
    return null;
  }

  const calculatePremium = () => {
    let basePremium = 800;
    
    if (insuranceType === "auto") {
      basePremium = 1200;
      if (formData.vehicleYear && parseInt(formData.vehicleYear) > 2020) basePremium += 200;
      if (formData.annualMileage && parseInt(formData.annualMileage) > 15000) basePremium += 150;
    } else if (insuranceType === "home") {
      basePremium = 1500;
    } else if (insuranceType === "health") {
      basePremium = 450;
    } else if (insuranceType === "life") {
      basePremium = 65;
    } else if (insuranceType === "business") {
      basePremium = 2200;
    }

    if (formData.coverageLevel === "premium") basePremium *= 1.5;
    else if (formData.coverageLevel === "standard") basePremium *= 1.2;

    if (formData.deductible) {
      const deductible = parseInt(formData.deductible);
      if (deductible >= 1000) basePremium *= 0.9;
      else if (deductible >= 500) basePremium *= 0.95;
    }

    return Math.round(basePremium);
  };

  const monthlyPremium = calculatePremium();
  const annualPremium = monthlyPremium * 12;
  const savings = Math.round(annualPremium * 0.15);

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

  const getCoverageDetails = () => {
    const details = {
      auto: [
        "Liability Coverage: $100,000/$300,000",
        "Collision Coverage: Actual Cash Value",
        "Comprehensive Coverage: Actual Cash Value", 
        "Uninsured Motorist: $100,000/$300,000",
        "Medical Payments: $5,000",
        "Roadside Assistance: 24/7"
      ],
      home: [
        "Dwelling Coverage: $250,000",
        "Personal Property: $125,000",
        "Liability Protection: $300,000",
        "Medical Payments: $5,000",
        "Loss of Use: $50,000",
        "Natural Disaster Protection"
      ],
      health: [
        "Annual Deductible: $" + (formData.deductible || "1,000"),
        "Primary Care: $25 copay",
        "Specialist: $45 copay",
        "Emergency Room: $350 copay",
        "Prescription Drugs: $10/$35/$70",
        "Preventive Care: 100% covered"
      ],
      life: [
        "Death Benefit: $" + (formData.coverageAmount || "500,000"),
        "Term: 20 years",
        "Premium Guaranteed: Yes",
        "Conversion Option: Available",
        "Waiver of Premium: Included",
        "Accelerated Death Benefit: Included"
      ],
      business: [
        "General Liability: $1,000,000",
        "Property Coverage: $500,000",
        "Business Interruption: $250,000",
        "Cyber Liability: $100,000",
        "Workers Compensation: As required",
        "Professional Liability: $500,000"
      ]
    };
    return details[insuranceType as keyof typeof details] || [];
  };

  const handleAcceptProposal = () => {
    toast({
      title: "Proposal Accepted!",
      description: "We'll send you the policy documents within 24 hours.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your proposal PDF is being downloaded.",
    });
  };

  const handleEmailProposal = () => {
    toast({
      title: "Email Sent",
      description: "Proposal has been sent to your email address.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Insurance Proposal</h1>
          </div>
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            Quote Generated Successfully
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Proposal */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="text-xl">{getInsuranceTitle(insuranceType)} Policy</CardTitle>
                <p className="text-blue-100">Policy Number: SG-{insuranceType.toUpperCase()}-{Date.now().toString().slice(-6)}</p>
              </CardHeader>
              <CardContent className="p-6">
                {/* Customer Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Policyholder Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Phone:</strong> {formData.phone}</div>
                      <div><strong>Address:</strong> {formData.address}</div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Coverage Details */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Coverage Details</h3>
                  <div className="space-y-2">
                    {getCoverageDetails().map((detail, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-600 mr-2" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Premium Information */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Premium Information</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Monthly Premium</div>
                        <div className="text-2xl font-bold text-blue-600">${monthlyPremium}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Annual Premium</div>
                        <div className="text-xl font-semibold">${annualPremium}</div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-green-600">
                      Save ${savings} per year with annual payment!
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Important Terms:</h4>
                  <ul className="space-y-1">
                    <li>• This quote is valid for 30 days</li>
                    <li>• Policy effective date begins upon acceptance and first payment</li>
                    <li>• Coverage is subject to underwriting approval</li>
                    <li>• Deductible applies per claim</li>
                    <li>• Premium may be adjusted based on final underwriting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleAcceptProposal}
                >
                  Accept Proposal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleEmailProposal}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Proposal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/")}
                >
                  Get Another Quote
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  <span>(555) 123-SECURE</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  <span>quotes@secureguard.com</span>
                </div>
                <div className="text-sm text-gray-600">
                  Our agents are available 24/7 to help you with your insurance needs.
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Why SecureGuard?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm">A+ Rated Insurance Company</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm">24/7 Claims Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm">No Hidden Fees</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm">Fast Claims Processing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
