import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthRegister } from "../../hooks/useAuth";
import RegisterStepper from "../../components/cards/multistepform/RegisterStepper";
import StepOne from "../../components/cards/multistepform/StepOne";
import StepTwo from "../../components/cards/multistepform/StepTwo";
import StepThree from "../../components/cards/multistepform/StepThree";
import StepFour from "../../components/cards/multistepform/StepFour";
import Success from "../../components/cards/multistepform/Success";

const Register = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { registerMutation } = useAuthRegister();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "TENANT" as "TENANT" | "OWNER",
  });

  const handleNext = async () => {
    setError(null);

    // Validation for step 3 (password step)
    if (step === 3) {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters.");
        return;
      }
    }

    // When moving from step 4 to 5 (submit)
    if (step === 4) {
      try {
        await registerMutation.mutateAsync({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          address: formData.address,
          password: formData.password,
          role: formData.role,
        });
        toast.success("Account created successfully!");
        setSuccess(true);
        setStep(5);
      } catch (err: any) {
        toast.error(
          err?.response?.data?.message ||
          "Registration failed. Please try again.",
        );
        setError(
          err?.response?.data?.message ||
          "Registration failed. Please try again.",
        );
      }
      return;
    }

    // Normal step progression
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  if (step === 5 && success) {
    return (
      <div className="min-h-screen bg-base-200">
        <Toaster position="top-center" />
        <Success />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <Toaster position="top-center" />
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        {/* Stepper */}
        <div className="p-6">
          <RegisterStepper step={step} />
        </div>

        {/* Form Content */}
        <div className="card-body">
          {step === 1 && (
            <StepOne
              firstName={formData.firstName}
              lastName={formData.lastName}
              email={formData.email}
              mobile={formData.mobile}
              onFirstNameChange={(value) =>
                setFormData({ ...formData, firstName: value })
              }
              onLastNameChange={(value) =>
                setFormData({ ...formData, lastName: value })
              }
              onEmailChange={(value) =>
                setFormData({ ...formData, email: value })
              }
              onMobileChange={(value) =>
                setFormData({ ...formData, mobile: value })
              }
            />
          )}
          {step === 2 && (
            <StepTwo
              address={formData.address}
              onAddressChange={(value) =>
                setFormData({ ...formData, address: value })
              }
            />
          )}
          {step === 3 && (
            <StepThree
              password={formData.password}
              confirmPassword={formData.confirmPassword}
              onPasswordChange={(value) =>
                setFormData({ ...formData, password: value })
              }
              onConfirmPasswordChange={(value) =>
                setFormData({ ...formData, confirmPassword: value })
              }
            />
          )}
          {step === 4 && (
            <StepFour
              role={formData.role}
              onRoleChange={(value) =>
                setFormData({ ...formData, role: value })
              }
            />
          )}

          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button
              className="btn btn-ghost"
              onClick={handleBack}
              disabled={step === 1 || registerMutation.status === "pending"}
            >
              Back
            </button>

            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={registerMutation.status === "pending" || step === 5}
            >
              {step === 4
                ? registerMutation.status === "pending"
                  ? "Creating Account..."
                  : "Create Account"
                : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
