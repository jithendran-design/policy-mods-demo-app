
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface HealthCoverageStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

export const HealthCoverageStep = ({ formData, onInputChange }: HealthCoverageStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-[#6366f1] mb-6">Health Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="height" className="text-gray-700 font-medium">Height</Label>
            <Input
              id="height"
              placeholder="5'8&quot;"
              value={formData.height || ""}
              onChange={(e) => onInputChange("height", e.target.value)}
              className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-gray-700 font-medium">Weight</Label>
            <Input
              id="weight"
              placeholder="150 lbs"
              value={formData.weight || ""}
              onChange={(e) => onInputChange("weight", e.target.value)}
              className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="smokingStatus" className="text-gray-700 font-medium">Smoking Status</Label>
            <Select onValueChange={(value) => onInputChange("smokingStatus", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white">
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
            <Select onValueChange={(value) => onInputChange("medicalConditions", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white">
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

      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Preferences</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="coverageLevel" className="text-gray-700 font-medium">Coverage Level</Label>
            <Select onValueChange={(value) => onInputChange("coverageLevel", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white">
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
            <Select onValueChange={(value) => onInputChange("deductible", value)}>
              <SelectTrigger className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white">
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
};
