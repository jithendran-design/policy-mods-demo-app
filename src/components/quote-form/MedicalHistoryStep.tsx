
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface MedicalHistoryStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

export const MedicalHistoryStep = ({ formData, onInputChange }: MedicalHistoryStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]" data-testid="medical-history-step">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="height" className="text-gray-700 font-medium">Height</Label>
          <Input
            id="height"
            data-testid="height-input"
            placeholder="5'8&quot;"
            value={formData.height || ""}
            onChange={(e) => onInputChange("height", e.target.value)}
            className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight" className="text-gray-700 font-medium">Weight</Label>
          <Input
            id="weight"
            data-testid="weight-input"
            placeholder="150 lbs"
            value={formData.weight || ""}
            onChange={(e) => onInputChange("weight", e.target.value)}
            className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="smokingStatus" className="text-gray-700 font-medium">Smoking Status</Label>
          <Select onValueChange={(value) => onInputChange("smokingStatus", value)}>
            <SelectTrigger 
              data-testid="smoking-status-select"
              className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
            >
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
            <SelectTrigger 
              data-testid="medical-conditions-select"
              className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
            >
              <SelectValue placeholder="Select if applicable" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="diabetes">Diabetes</SelectItem>
              <SelectItem value="heart">Heart condition</SelectItem>
              <SelectItem value="hypertension">Hypertension</SelectItem>
              <SelectItem value="asthma">Asthma</SelectItem>
              <SelectItem value="other">Other (please specify)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentMedications" className="text-gray-700 font-medium">Current Medications</Label>
        <Input
          id="currentMedications"
          data-testid="medications-input"
          placeholder="List any current medications (optional)"
          value={formData.currentMedications || ""}
          onChange={(e) => onInputChange("currentMedications", e.target.value)}
          className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
        />
      </div>
    </div>
  );
};
