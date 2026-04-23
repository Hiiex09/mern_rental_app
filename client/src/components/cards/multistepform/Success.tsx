import { CircleCheck } from "lucide-react";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-xl bg-base-100 shadow-xl text-center p-8 space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center">
            <span className="text-4xl">
              <CircleCheck className="text-success" size={50} />
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold">
          Account Created Successfully!
        </h1>

        {/* Description */}
        <p className="text-base-content/70">
          Welcome to Estate Flow. You can now log in and start exploring
          properties.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-primary">Go to Dashboard</button>

          <button className="btn btn-outline">Login Now</button>
        </div>

        {/* Footer small */}
        <div className="text-xs opacity-60 pt-4">
          Join thousands of users managing properties today.
        </div>
      </div>
    </div>
  );
};

export default Success;
