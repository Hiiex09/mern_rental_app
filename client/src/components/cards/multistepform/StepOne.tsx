const StepOne = () => {
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
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
        />
        <p className="text-success text-xs mt-1">Email is available</p>
      </div>

      {/* Phone */}
      <div className="flex gap-2">
        <input
          type="tel"
          placeholder="Mobile Number"
          className="input input-bordered w-full"
        />
      </div>
    </div>
  );
};

export default StepOne;
