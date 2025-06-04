
interface ReviewStepProps {
  formData: any;
  insuranceType?: string;
}

export const ReviewStep = ({ formData, insuranceType }: ReviewStepProps) => {
  return (
    <div className="space-y-8 min-h-[400px]">
      {/* Personal Information Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
            1
          </div>
          Personal Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Full Name</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{formData.firstName} {formData.lastName}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email Address</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{formData.email}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Phone Number</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{formData.phone}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Address</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{formData.address}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Coverage Level</span>
              <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">{formData.coverageLevel}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Deductible</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">${formData.deductible}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Details Section */}
      {insuranceType === "auto" && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              2
            </div>
            Vehicle Details
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Vehicle</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-100">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Annual Mileage</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{formData.annualMileage} miles</p>
            </div>
          </div>
        </div>
      )}

      {/* Health Information Section */}
      {insuranceType === "health" && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
              2
            </div>
            Health Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Height</span>
                <p className="text-lg font-semibold text-gray-900 mt-1">{formData.height}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Weight</span>
                <p className="text-lg font-semibold text-gray-900 mt-1">{formData.weight}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Smoking Status</span>
                <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">{formData.smokingStatus}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Medical Conditions</span>
                <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">{formData.medicalConditions}</p>
              </div>
            </div>
          </div>

          {/* Family Members Subsection */}
          {formData.familyMembers && formData.familyMembers.length > 0 && (
            <div className="mt-8 bg-white p-6 rounded-xl border border-purple-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-6 h-6 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                  3
                </div>
                Family Members
              </h4>
              <div className="grid gap-4">
                {formData.familyMembers.map((member: any, index: number) => (
                  <div key={member.id} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Family Member {index + 1}</span>
                        <p className="text-lg font-semibold text-gray-900">{member.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{member.relationship}</p>
                        <p className="text-lg font-semibold text-gray-900">Age {member.age}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
