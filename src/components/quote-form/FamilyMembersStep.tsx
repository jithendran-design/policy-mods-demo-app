
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";

interface FamilyMember {
  id: string;
  name: string;
  dateOfBirth: string;
  relationship: string;
}

interface FamilyMembersStepProps {
  formData: any;
  onInputChange: (field: string, value: any) => void;
}

export const FamilyMembersStep = ({ formData, onInputChange }: FamilyMembersStepProps) => {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(
    formData.familyMembers || []
  );

  const addFamilyMember = () => {
    const newMember: FamilyMember = {
      id: Date.now().toString(),
      name: "",
      dateOfBirth: "",
      relationship: ""
    };
    const updated = [...familyMembers, newMember];
    setFamilyMembers(updated);
    onInputChange("familyMembers", updated);
  };

  const removeFamilyMember = (id: string) => {
    const updated = familyMembers.filter(member => member.id !== id);
    setFamilyMembers(updated);
    onInputChange("familyMembers", updated);
  };

  const updateFamilyMember = (id: string, field: string, value: string) => {
    const updated = familyMembers.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    );
    setFamilyMembers(updated);
    onInputChange("familyMembers", updated);
  };

  return (
    <div className="space-y-6 min-h-[400px]" data-testid="family-members-step">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Family Members</h3>
        <Button 
          type="button" 
          onClick={addFamilyMember}
          data-testid="add-family-member-btn"
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Member
        </Button>
      </div>

      {familyMembers.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No family members added yet.</p>
          <p>Click "Add Member" to include family members in your plan.</p>
        </div>
      )}

      {familyMembers.map((member, index) => (
        <div 
          key={member.id} 
          className="border border-gray-200 rounded-lg p-4 space-y-4"
          data-testid={`family-member-${index}`}
        >
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-gray-700">Family Member {index + 1}</h4>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => removeFamilyMember(member.id)}
              data-testid={`remove-member-${index}`}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${member.id}`} className="text-gray-700 font-medium">Full Name</Label>
              <Input
                id={`name-${member.id}`}
                data-testid={`member-name-${index}`}
                placeholder="Enter full name"
                value={member.name}
                onChange={(e) => updateFamilyMember(member.id, "name", e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`dob-${member.id}`} className="text-gray-700 font-medium">Date of Birth</Label>
              <Input
                id={`dob-${member.id}`}
                data-testid={`member-dob-${index}`}
                type="date"
                value={member.dateOfBirth}
                onChange={(e) => updateFamilyMember(member.id, "dateOfBirth", e.target.value)}
                className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`relationship-${member.id}`} className="text-gray-700 font-medium">Relationship</Label>
              <Select onValueChange={(value) => updateFamilyMember(member.id, "relationship", value)}>
                <SelectTrigger 
                  data-testid={`member-relationship-${index}`}
                  className="border-gray-300 focus:border-primary focus:ring-primary rounded-lg bg-white"
                >
                  <SelectValue placeholder="Select relationship" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spouse">Spouse</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="sibling">Sibling</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
