
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";

interface PersonalInformationStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

const PersonalInformationStep = ({ formData, onInputChange }: PersonalInformationStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={formData.firstName || ""}
            onChange={(e) => onInputChange("firstName", e.target.value)}
            className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName || ""}
            onChange={(e) => onInputChange("lastName", e.target.value)}
            className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            value={formData.email || ""}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
          <Input
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone || ""}
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">Address</Label>
        <Input
          id="address"
          placeholder="123 Main St, City, State 12345"
          value={formData.address || ""}
          onChange={(e) => onInputChange("address", e.target.value)}
          className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">Date of Birth</Label>
          <div className="relative">
            <Input
              id="dateOfBirth"
              type="date"
              placeholder="dd/mm/yyyy"
              value={formData.dateOfBirth || ""}
              onChange={(e) => onInputChange("dateOfBirth", e.target.value)}
              className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 pl-4 pr-10"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</Label>
          <Select onValueChange={(value) => onInputChange("gender", value)}>
            <SelectTrigger className="h-12 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
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
};

export default PersonalInformationStep;
