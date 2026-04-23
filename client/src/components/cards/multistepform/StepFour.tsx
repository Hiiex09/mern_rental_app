import { User } from "lucide-react";

interface StepFourProps {
  role: "TENANT" | "OWNER";
  onRoleChange: (value: "TENANT" | "OWNER") => void;
}

const StepFour = ({ role, onRoleChange }: StepFourProps) => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Finalize your profile
        </h1>
        <p className="text-sm opacity-70 mt-2">
          Choose your role to customize your experience.
        </p>
      </div>

      {/* Avatar Upload (UI only) */}
      <div className="flex flex-col items-center gap-4">
        <div className="avatar">
          <div className="w-24 rounded-full bg-base-200 flex items-center justify-center">
            <span className="text-2xl">
              <User size={25} />
            </span>
          </div>
        </div>

        <button className="btn btn-outline btn-sm">Upload Photo</button>
      </div>

      {/* Role Selection */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Tenant */}
        <label
          className={`card cursor-pointer border-2 p-4 transition ${
            role === "TENANT"
              ? "border-primary bg-primary/10"
              : "border-base-300"
          }`}
        >
          <input
            type="radio"
            name="role"
            className="hidden"
            checked={role === "TENANT"}
            onChange={() => onRoleChange("TENANT")}
          />

          <h2 className="font-bold text-lg">Tenant</h2>
          <p className="text-sm opacity-70">Browse and rent properties</p>
        </label>

        {/* Owner */}
        <label
          className={`card cursor-pointer border-2 p-4 transition ${
            role === "OWNER"
              ? "border-primary bg-primary/10"
              : "border-base-300"
          }`}
        >
          <input
            type="radio"
            name="role"
            className="hidden"
            checked={role === "OWNER"}
            onChange={() => onRoleChange("OWNER")}
          />

          <h2 className="font-bold text-lg">Owner</h2>
          <p className="text-sm opacity-70">Manage properties</p>
        </label>
      </div>

      {/* Info */}
      <div className="alert">
        <span className="text-sm">
          Your role determines your dashboard experience.
        </span>
      </div>
    </div>
  );
};

export default StepFour;
