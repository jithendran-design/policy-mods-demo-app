
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Check, Download, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  const getDetailedCoverage = () => {
    const details = {
      auto: {
        title: "Auto Policy - Vehicle Coverage",
        coverages: [
          { name: "Liability Coverage - Bodily Injury", amount: "$100,000/$300,000" },
          { name: "Liability Coverage - Property Damage", amount: "$100,000" },
          { name: "Collision Coverage", amount: "Actual Cash Value" },
          { name: "Comprehensive Coverage", amount: "Actual Cash Value" },
          { name: "Uninsured Motorist - Bodily Injury", amount: "$100,000/$300,000" },
          { name: "Uninsured Motorist - Property Damage", amount: "$25,000" },
          { name: "Medical Payments", amount: "$5,000" },
          { name: "Personal Injury Protection", amount: "$10,000" }
        ],
        deductibles: [
          { type: "Collision Deductible", amount: "$500" },
          { type: "Comprehensive Deductible", amount: "$250" }
        ],
        endorsements: [
          "Roadside Assistance Coverage",
          "Rental Car Coverage",
          "Gap Coverage",
          "New Car Replacement"
        ]
      },
      home: {
        title: `HOB Home Policy - ${formData.address || "Property Address"}`,
        coverages: [
          { name: "Coverage A - Dwelling", amount: "$285,000" },
          { name: "Coverage B - Other Structures", amount: "$28,500" },
          { name: "Coverage C - Personal Property", amount: "$171,000" },
          { name: "Coverage D - Loss of Use", amount: "$57,000" },
          { name: "Coverage E - Personal Liability", amount: "$500,000" },
          { name: "Coverage F - Medical Payments to Others", amount: "$5,000" }
        ],
        deductibles: [
          { type: "All Perils Deductible", amount: "1%" },
          { type: "Wind/Hail Deductible", amount: "2%" },
          { type: "Named Storm Deductible", amount: "2%" }
        ],
        endorsements: [
          "Water Backup Coverage",
          "Foundation Coverage", 
          "Accidental Water Damage",
          "Jewelry Coverage",
          "Window/Glass Coverage",
          "Contents Replacement Cost",
          "100% Replacement Cost"
        ]
      },
      health: {
        title: "Health Insurance Policy",
        coverages: [
          { name: "Annual Deductible (Individual)", amount: `$${formData.deductible || "1,000"}` },
          { name: "Annual Deductible (Family)", amount: `$${(parseInt(formData.deductible || "1000") * 2).toLocaleString()}` },
          { name: "Out-of-Pocket Maximum (Individual)", amount: "$8,700" },
          { name: "Out-of-Pocket Maximum (Family)", amount: "$17,400" },
          { name: "Primary Care Physician", amount: "$25 copay" },
          { name: "Specialist", amount: "$45 copay" },
          { name: "Emergency Room", amount: "$350 copay" },
          { name: "Urgent Care", amount: "$75 copay" }
        ],
        deductibles: [
          { type: "Prescription Drugs - Generic", amount: "$10 copay" },
          { type: "Prescription Drugs - Brand", amount: "$35 copay" },
          { type: "Prescription Drugs - Specialty", amount: "$70 copay" }
        ],
        endorsements: [
          "Preventive Care - 100% covered",
          "Mental Health Coverage",
          "Maternity Coverage",
          "Prescription Drug Coverage"
        ]
      },
      life: {
        title: "Term Life Insurance Policy",
        coverages: [
          { name: "Death Benefit", amount: `$${(formData.coverageAmount || "500,000").toLocaleString()}` },
          { name: "Term Length", amount: "20 years" },
          { name: "Premium Guarantee", amount: "Level for term" },
          { name: "Conversion Option", amount: "Available until age 65" },
          { name: "Waiver of Premium", amount: "Included" },
          { name: "Accelerated Death Benefit", amount: "Up to 75% of face amount" }
        ],
        deductibles: [],
        endorsements: [
          "Terminal Illness Benefit",
          "Accidental Death Benefit",
          "Child Term Rider Available",
          "Spouse Term Rider Available"
        ]
      },
      business: {
        title: "Commercial Package Policy",
        coverages: [
          { name: "General Liability", amount: "$1,000,000 per occurrence" },
          { name: "General Liability Aggregate", amount: "$2,000,000" },
          { name: "Commercial Property", amount: "$500,000" },
          { name: "Business Personal Property", amount: "$250,000" },
          { name: "Business Interruption", amount: "$250,000" },
          { name: "Cyber Liability", amount: "$100,000" },
          { name: "Professional Liability", amount: "$500,000" },
          { name: "Workers Compensation", amount: "As required by law" }
        ],
        deductibles: [
          { type: "Property Deductible", amount: "$1,000" },
          { type: "Cyber Liability Deductible", amount: "$2,500" }
        ],
        endorsements: [
          "Equipment Breakdown Coverage",
          "Employment Practices Liability",
          "Directors & Officers Liability",
          "Commercial Auto Liability"
        ]
      }
    };
    return details[insuranceType as keyof typeof details] || details.auto;
  };

  const coverageDetails = getDetailedCoverage();

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

  const agentInfo = {
    name: "Sarah Mitchell",
    phone: "(555) 123-4567",
    email: "sarah.mitchell@secureguard.com",
    license: "TX-INS-8847291"
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-[#3C71DD] mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">Insurance Proposal</h1>
          </div>
          <Badge className="bg-green-100 text-green-800 px-4 py-2">
            Quote Generated Successfully
          </Badge>
        </div>

        {/* Company Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center mb-2">
                <Shield className="h-10 w-10 text-[#3C71DD] mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">SecureGuard</h2>
                  <p className="text-gray-600">Financial Services</p>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <div className="font-semibold">SecureGuard Insurance Agency</div>
              <div>2800 Financial Plaza</div>
              <div>Dallas, TX 75201</div>
              <div>(214) 555-SECURE</div>
              <div>www.secureguard.com</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Proposal */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="bg-[#3C71DD] text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Insurance Proposal Prepared Exclusively For:</CardTitle>
                    <div className="mt-2 text-blue-100">
                      <div className="font-semibold">{formData.firstName} {formData.lastName}</div>
                      <div>{formData.address}</div>
                    </div>
                  </div>
                  <div className="text-right text-blue-100">
                    <div className="font-semibold">Prepared By</div>
                    <div>{agentInfo.name}</div>
                    <div>{agentInfo.phone}</div>
                    <div>{agentInfo.email}</div>
                    <div>{currentDate}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Introduction */}
                <div className="mb-6">
                  <p className="text-gray-700">
                    Thank you for the opportunity to assist you in assessing your personal insurance needs. 
                    I am pleased to present to you the following personal insurance proposal:
                  </p>
                </div>

                {/* Coverage Details Box */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">{coverageDetails.title}</h3>
                  
                  {/* Main Coverage */}
                  <div className="space-y-3 mb-6">
                    {coverageDetails.coverages.map((coverage, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="text-gray-700">{coverage.name}</span>
                        <span className="font-semibold">{coverage.amount}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deductibles */}
                  {coverageDetails.deductibles.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-gray-800">Deductibles:</h4>
                      <div className="space-y-2">
                        {coverageDetails.deductibles.map((deductible, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-700">{deductible.type}</span>
                            <span className="font-semibold">{deductible.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Endorsements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-gray-800">
                      {insuranceType === "home" ? "Endorsements:" : 
                       insuranceType === "auto" ? "Additional Coverage:" : 
                       "Benefits:"}
                    </h4>
                    <div className="text-gray-700 text-sm">
                      {coverageDetails.endorsements.join(", ")}
                    </div>
                  </div>

                  {/* Premium Breakdown */}
                  <div className="border-t pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Premium</span>
                        <span className="font-bold text-xl text-[#3C71DD]">${monthlyPremium.toLocaleString()}.00</span>
                      </div>
                      {insuranceType === "home" && (
                        <>
                          <div className="flex justify-between items-center text-sm">
                            <span>Flood Insurance (optional)</span>
                            <span>$246.00</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span>Agency Fee</span>
                            <span>$75.00</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total WITHOUT Flood Insurance</span>
                            <span className="font-bold">${(monthlyPremium + 75).toLocaleString()}.00</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total WITH Flood Insurance</span>
                            <span className="font-bold">${(monthlyPremium + 246 + 75).toLocaleString()}.00</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Comments */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Additional Comments</h3>
                  <p className="text-gray-700 text-sm">
                    Underwritten through AM Best Rated Insurance Company
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-gray-500 bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Disclosure:</strong> The premium estimates and coverage limits outlined in the proposal above are based upon the accuracy of the information you provided and may not represent all coverages available. This proposal does not constitute a contract or offer of insurance and premium amounts cannot be guaranteed until coverage is purchased. For additional information regarding the assumptions used to prepare this proposal or to purchase insurance coverage, please contact your agent at the phone number listed above.
                  </p>
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
                  className="w-full border-[#3C71DD] text-[#3C71DD] hover:bg-[#3C71DD] hover:text-white"
                  onClick={handleDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-[#3C71DD] text-[#3C71DD] hover:bg-[#3C71DD] hover:text-white"
                  onClick={handleEmailProposal}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Proposal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-[#3C71DD] text-[#3C71DD] hover:bg-[#3C71DD] hover:text-white"
                  onClick={() => navigate("/")}
                >
                  Get Another Quote
                </Button>
              </CardContent>
            </Card>

            {/* Agent Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#3C71DD] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">SM</span>
                  </div>
                  <div className="font-semibold">{agentInfo.name}</div>
                  <div className="text-sm text-gray-600">Licensed Agent</div>
                  <div className="text-xs text-gray-500">License #{agentInfo.license}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-[#3C71DD]" />
                    <span className="text-sm">{agentInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-[#3C71DD]" />
                    <span className="text-sm">{agentInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-[#3C71DD]" />
                    <span className="text-sm">Dallas, TX Office</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 mt-3">
                  Available Monday-Friday 8AM-6PM CST for personalized service and claims support.
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-[#3C71DD] to-[#4F7FE6] text-white">
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
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-2" />
                  <span className="text-sm">Local Agent Support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Proposal;
