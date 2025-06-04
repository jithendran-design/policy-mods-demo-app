
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CoverageOptionsStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

export const CoverageOptionsStep = ({ formData, onInputChange }: CoverageOptionsStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Options</h3>
        <div className="space-y-6">
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

          <div className="grid md:grid-cols-2 gap-6">
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
            <div className="space-y-2">
              <Label htmlFor="coverageAmount" className="text-gray-700 font-medium">Coverage Amount</Label>
              <Select onValueChange={(value) => onInputChange("coverageAmount", value)}>
                <SelectTrigger className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white">
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
};
