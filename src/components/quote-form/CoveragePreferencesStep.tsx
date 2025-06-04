
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface CoveragePreferencesStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

export const CoveragePreferencesStep = ({ formData, onInputChange }: CoveragePreferencesStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]" data-testid="coverage-preferences-step">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="coverageLevel" className="text-gray-700 font-medium">Coverage Level</Label>
          <Select onValueChange={(value) => onInputChange("coverageLevel", value)}>
            <SelectTrigger 
              data-testid="coverage-level-select"
              className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
            >
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
            <SelectTrigger 
              data-testid="deductible-select"
              className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
            >
              <SelectValue placeholder="Select deductible" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="250">$250</SelectItem>
              <SelectItem value="500">$500</SelectItem>
              <SelectItem value="1000">$1,000</SelectItem>
              <SelectItem value="2500">$2,500</SelectItem>
              <SelectItem value="5000">$5,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="planType" className="text-gray-700 font-medium">Plan Type</Label>
          <Select onValueChange={(value) => onInputChange("planType", value)}>
            <SelectTrigger 
              data-testid="plan-type-select"
              className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
            >
              <SelectValue placeholder="Select plan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="family">Family</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="networkPreference" className="text-gray-700 font-medium">Network Preference</Label>
          <Select onValueChange={(value) => onInputChange("networkPreference", value)}>
            <SelectTrigger 
              data-testid="network-preference-select"
              className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
            >
              <SelectValue placeholder="Select network" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hmo">HMO</SelectItem>
              <SelectItem value="ppo">PPO</SelectItem>
              <SelectItem value="epo">EPO</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDoctor" className="text-gray-700 font-medium">Preferred Doctor/Hospital (Optional)</Label>
        <Input
          id="preferredDoctor"
          data-testid="preferred-doctor-input"
          placeholder="Enter preferred healthcare provider"
          value={formData.preferredDoctor || ""}
          onChange={(e) => onInputChange("preferredDoctor", e.target.value)}
          className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
        />
      </div>
    </div>
  );
};
