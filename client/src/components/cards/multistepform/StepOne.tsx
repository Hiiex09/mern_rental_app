interface StepOneProps {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  onFirstNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMobileChange: (value: string) => void;
}

const StepOne = ({
  firstName,
  lastName,
  email,
  mobile,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onMobileChange,
}: StepOneProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm opacity-70">
          Join the curated ecosystem for property management.
        </p>
      </div>

      {/* Name */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
          value={firstName}
          onChange={(e) => onFirstNameChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
          value={lastName}
          onChange={(e) => onLastNameChange(e.target.value)}
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <p className="text-success text-xs mt-1">Email is available</p>
      </div>

      {/* Phone */}
      <div className="flex gap-2">
        <input
          type="tel"
          placeholder="Mobile Number"
          className="input input-bordered w-full"
          value={mobile}
          onChange={(e) => onMobileChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default StepOne;
