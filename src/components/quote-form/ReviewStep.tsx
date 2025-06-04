
interface ReviewStepProps {
  formData: any;
  insuranceType?: string;
}

export const ReviewStep = ({ formData, insuranceType }: ReviewStepProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <div className="bg-white p-6 rounded-lg space-y-4 shadow-sm border border-gray-200">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Name:</span>
              <span className="text-gray-900">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Email:</span>
              <span className="text-gray-900">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-900">{formData.phone}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Address:</span>
              <span className="text-gray-900 text-right">{formData.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Coverage Level:</span>
              <span className="text-gray-900 capitalize">{formData.coverageLevel}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Deductible:</span>
              <span className="text-gray-900">${formData.deductible}</span>
            </div>
          </div>
        </div>
        
        {insuranceType === "auto" && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Vehicle Details</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Vehicle:</span>
                <span className="text-gray-900">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Annual Mileage:</span>
                <span className="text-gray-900">{formData.annualMileage} miles</span>
              </div>
            </div>
          </div>
        )}
        
        {insuranceType === "health" && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Health Information</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Height:</span>
                  <span className="text-gray-900">{formData.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Weight:</span>
                  <span className="text-gray-900">{formData.weight}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Smoking Status:</span>
                  <span className="text-gray-900 capitalize">{formData.smokingStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Medical Conditions:</span>
                  <span className="text-gray-900 capitalize">{formData.medicalConditions}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
