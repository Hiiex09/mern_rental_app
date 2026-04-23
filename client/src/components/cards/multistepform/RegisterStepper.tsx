export default function RegisterStepper({ step }: { step: number }) {
  return (
    <ul className="steps w-full">
      <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Identity</li>
      <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Location</li>
      <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Security</li>
      <li className={`step ${step >= 4 ? "step-primary" : ""}`}>Persona</li>
      <li className={`step ${step >= 5 ? "step-primary" : ""}`}>Success</li>
    </ul>
  );
}
