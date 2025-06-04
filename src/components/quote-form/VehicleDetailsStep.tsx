
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface VehicleDetailsStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

const VehicleDetailsStep = ({ formData, onInputChange }: VehicleDetailsStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-600 mb-6">Vehicle Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="vehicleYear" className="text-sm font-medium text-gray-700">Vehicle Year</Label>
            <Select onValueChange={(value) => onInputChange("vehicleYear", value)}>
              <SelectTrigger className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
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
            <Label htmlFor="vehicleMake" className="text-sm font-medium text-gray-700">Make</Label>
            <Input
              id="vehicleMake"
              placeholder="Toyota"
              value={formData.vehicleMake || ""}
              onChange={(e) => onInputChange("vehicleMake", e.target.value)}
              className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="vehicleModel" className="text-sm font-medium text-gray-700">Model</Label>
            <Input
              id="vehicleModel"
              placeholder="Camry"
              value={formData.vehicleModel || ""}
              onChange={(e) => onInputChange("vehicleModel", e.target.value)}
              className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vin" className="text-sm font-medium text-gray-700">VIN</Label>
            <Input
              id="vin"
              placeholder="1HGBH41JXMN109186"
              value={formData.vin || ""}
              onChange={(e) => onInputChange("vin", e.target.value)}
              className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <Label htmlFor="annualMileage" className="text-sm font-medium text-gray-700">Annual Mileage</Label>
          <Select onValueChange={(value) => onInputChange("annualMileage", value)}>
            <SelectTrigger className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
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
};

export default VehicleDetailsStep;
