import { useState } from "react";
import RegisterStepper from "../../components/cards/multistepform/RegisterStepper";
import StepOne from "../../components/cards/multistepform/StepOne";
import StepTwo from "../../components/cards/multistepform/StepTwo";
import StepThree from "../../components/cards/multistepform/StepThree";
import StepFour from "../../components/cards/multistepform/StepFour";
import Success from "../../components/cards/multistepform/Success";

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        {/* Stepper */}
        <div className="p-6">
          <RegisterStepper step={step} />
        </div>

        {/* Form Content */}
        <div className="card-body">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
          {step === 5 && <Success />}

          <div className="flex justify-between mt-6">
            <button
              className="btn btn-ghost"
              onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
            >
              Back
            </button>

            <button
              className="btn btn-primary"
              onClick={() => setStep((prev) => Math.min(prev + 1, 5))}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
