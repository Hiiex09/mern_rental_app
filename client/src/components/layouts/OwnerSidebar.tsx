import {
  Building2,
  ChartPie,
  DoorOpen,
  FileText,
  FolderTree,
  HandCoins,
  HouseHeart,
  LayoutDashboard,
  LogOut,
  Menu,
  Users,
  Wrench,
} from "lucide-react";
import { useAuthLogout } from "../../hooks/useAuth";

const OwnerSidebar = () => {
  const { handleLogout } = useAuthLogout();

  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />

      {/* MAIN CONTENT */}
      <div className="drawer-content flex flex-col">
        {/* TOP NAVBAR */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <label htmlFor="sidebar-toggle" className="btn btn-ghost lg:hidden">
              <Menu size={20} />
            </label>
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="sidebar-toggle" className="drawer-overlay"></label>

        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <div className="mb-6 text-lg font-bold flex items-center gap-2 border-b-2 pb-4">
            <HouseHeart size={20} />
            Paupa
          </div>

          <li className="pt-3">
            <a>
              <LayoutDashboard size={20} />
              Dashboard
            </a>
          </li>
          <li className="pt-3">
            <details open>
              <summary>
                <FolderTree size={20} />
                Management
              </summary>
              <ul>
                <li>
                  <a>
                    <Building2 size={20} />
                    Properties
                  </a>
                </li>
                <li>
                  <a>
                    <DoorOpen size={20} />
                    Units
                  </a>
                </li>
                <li>
                  <a>
                    <Users size={20} />
                    Tenants
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li className="pt-3">
            <a>
              <HandCoins size={20} />
              Payment
            </a>
          </li>
          <li className="pt-3">
            <a>
              <ChartPie size={20} />
              Reports
            </a>
          </li>
          <li className="pt-3">
            <a>
              <Wrench size={20} />
              Maintenance
            </a>
          </li>
          <li className="pt-3">
            <a>
              <FileText size={20} />
              Contracts
            </a>
          </li>
          <li className="pt-16">
            <button className="btn btn-error btn-soft" onClick={handleLogout}>
              <LogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OwnerSidebar;
