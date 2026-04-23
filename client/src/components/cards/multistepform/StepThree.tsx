import { Check, Eye } from "lucide-react";
import { useState } from "react";

const StepThree = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Secure your account</h1>
        <p className="text-sm opacity-70 mt-2">
          Choose a strong password to protect your account.
        </p>
      </div>

      {/* Password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Password</span>
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            className="input input-bordered w-full pr-12"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold">Confirm Password</span>
        </label>

        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Repeat your password"
            className="input input-bordered w-full pr-12"
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Strength */}
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span>Password strength</span>
          <span className="font-semibold">Strong</span>
        </div>
        <progress
          className="progress progress-primary w-full"
          value="80"
          max="100"
        />
      </div>

      {/* Checklist */}
      <div className="bg-base-200 p-4 rounded-lg space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          At least 12 characters
        </p>

        <p className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          One special character
        </p>

        <p className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          One number
        </p>

        <p className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          Upper & lowercase
        </p>
      </div>
    </div>
  );
};

export default StepThree;
