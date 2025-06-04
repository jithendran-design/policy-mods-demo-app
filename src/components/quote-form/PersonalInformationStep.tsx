
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PersonalInformationStepProps {
  formData: any;
  onInputChange: (field: string, value: string) => void;
}

export const PersonalInformationStep = ({ formData, onInputChange }: PersonalInformationStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px] bg-gray-50 p-6 rounded-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={formData.firstName || ""}
            onChange={(e) => onInputChange("firstName", e.target.value)}
            className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={formData.lastName || ""}
            onChange={(e) => onInputChange("lastName", e.target.value)}
            className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.doe@email.com"
            value={formData.email || ""}
            onChange={(e) => onInputChange("email", e.target.value)}
            className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
          <Input
            id="phone"
            placeholder="(555) 123-4567"
            value={formData.phone || ""}
            onChange={(e) => onInputChange("phone", e.target.value)}
            className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-gray-700 font-medium">Address</Label>
        <Input
          id="address"
          placeholder="123 Main St, City, State 12345"
          value={formData.address || ""}
          onChange={(e) => onInputChange("address", e.target.value)}
          className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth" className="text-gray-700 font-medium">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth || ""}
            onChange={(e) => onInputChange("dateOfBirth", e.target.value)}
            className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender" className="text-gray-700 font-medium">Gender</Label>
          <Select onValueChange={(value) => onInputChange("gender", value)}>
            <SelectTrigger className="border-gray-300 focus:border-[#6366f1] focus:ring-[#6366f1] rounded-lg bg-white">
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
