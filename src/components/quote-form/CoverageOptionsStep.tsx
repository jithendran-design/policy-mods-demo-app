
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CoverageOptionsStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

const CoverageOptionsStep = ({ formData, onInputChange }: CoverageOptionsStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Coverage Options</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="coverageLevel" className="text-sm font-medium text-gray-700">Coverage Level</Label>
            <Select onValueChange={(value) => onInputChange("coverageLevel", value)}>
              <SelectTrigger className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
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
              <Label htmlFor="deductible" className="text-sm font-medium text-gray-700">Deductible</Label>
              <Select onValueChange={(value) => onInputChange("deductible", value)}>
                <SelectTrigger className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
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
              <Label htmlFor="coverageAmount" className="text-sm font-medium text-gray-700">Coverage Amount</Label>
              <Select onValueChange={(value) => onInputChange("coverageAmount", value)}>
                <SelectTrigger className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
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

export default CoverageOptionsStep;
