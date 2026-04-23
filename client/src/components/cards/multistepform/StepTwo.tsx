import { Info } from "lucide-react";

interface StepTwoProps {
  address: string;
  onAddressChange: (value: string) => void;
}

const StepTwo = ({ address, onAddressChange }: StepTwoProps) => {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold">
          Where are you located?
        </h1>
        <p className="text-sm opacity-70">
          Providing your residential address helps us tailor property
          recommendations and verify your profile for secure transactions.
        </p>
      </div>

      {/* TEXTAREA */}
      <div className="space-y-2">
        <label className="font-semibold text-sm">Residential Address</label>

        <textarea
          className="textarea textarea-bordered w-full h-32 bg-base-200"
          placeholder="Enter your full street address, apartment/suite number, city, state, and zip code..."
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
        />

        <div className="flex items-start gap-2 text-xs opacity-70">
          <Info size={14} />
          <p>
            This information is kept confidential and only shared with verified
            property managers during the application process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
