import { Eye } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthLogin } from "../../hooks/useAuth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginMutation, handleLogin } = useAuthLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin({ email, password });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-100">
      {/* LEFT SIDE (Hero - hidden on mobile) */}
      <div className="hidden lg:flex lg:w-3/5 relative bg-primary text-primary-content overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="architecture"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 p-16 flex flex-col justify-between">
          <h1 className="text-3xl font-bold">The Curator</h1>

          <div>
            <p className="uppercase text-xs opacity-70 tracking-widest">
              Volume 04: Structure & Light
            </p>
            <h2 className="text-4xl font-bold mt-4">
              Experience spaces that define your identity.
            </h2>
            <p className="mt-4 opacity-80">
              Curated architectural excellence and luxury environments.
            </p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl mt-10">
            <p className="text-sm italic">
              "Architecture is the learned game of forms in light."
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-sm opacity-70">
              Enter your credentials to continue.
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="name@architect.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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

            {/* Remember */}
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>

            {/* Button */}
            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={loginMutation.status === "pending"}
            >
              {loginMutation.status === "pending"
                ? "Signing in..."
                : "Sign in to Portal"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm opacity-70">
            No account?{" "}
            <Link
              to="/register"
              className="text-primary font-bold cursor-pointer"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
