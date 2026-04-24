import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const accountLabel = useMemo(() => {
    if (!user) return "Account";
    return user.firstName || user.email || "Account";
  }, [user]);

  const roleLinks = useMemo(() => {
    if (!user) return [];

    if (user.role === "TENANT") {
      return [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Bookings", href: "/tenant/bookings" },
        { name: "Profile", href: "/tenant/profile" },
      ];
    }

    if (user.role === "OWNER") {
      return [
        { name: "Dashboard", href: "/owner/dashboard" },
        { name: "My Properties", href: "/owner/properties" },
        { name: "Units", href: "/owner/units" },
        { name: "Bookings", href: "/owner/bookings" },
      ];
    }

    if (user.role === "ADMIN") {
      return [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Users", href: "/admin/users" },
        { name: "Properties", href: "/admin/properties" },
        { name: "Reports", href: "/admin/reports" },
      ];
    }

    return [];
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar fixed top-0 z-50 bg-base-100/95 backdrop-blur shadow-sm px-4 lg:px-10 py-3">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-extrabold text-primary">
          RENTAL HUB
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-primary transition">
          Home
        </Link>
        <Link to="/properties" className="hover:text-primary transition">
          Properties
        </Link>
        <a href="#how-it-works" className="hover:text-primary transition">
          How it works
        </a>
        <a href="#contact" className="hover:text-primary transition">
          Contact
        </a>
        {isAuthenticated &&
          roleLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="hidden lg:inline text-sm text-base-content/80">
              Hi, {accountLabel}
            </span>
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>

      <button
        className="btn btn-ghost md:hidden"
        onClick={() => setMobileOpen((current) => !current)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? "✕" : "☰"}
      </button>

      {mobileOpen && (
        <div className="absolute right-4 top-full mt-2 w-72 rounded-2xl border border-base-200 bg-base-100 p-4 shadow-xl md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="font-medium"
            >
              Home
            </Link>
            <Link
              to="/properties"
              onClick={() => setMobileOpen(false)}
              className="font-medium"
            >
              Properties
            </Link>
            <a
              href="#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="font-medium"
            >
              How it works
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="font-medium"
            >
              Contact
            </a>
            {isAuthenticated &&
              roleLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium"
                >
                  {link.name}
                </Link>
              ))}
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-block btn-ghost"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-block btn-primary"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-block btn-outline"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
