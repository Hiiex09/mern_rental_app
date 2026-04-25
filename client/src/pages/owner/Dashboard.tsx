import PropertiesCard from "../../components/cards/OwnerCards/PropertiesCard";
import TenantCard from "../../components/cards/OwnerCards/TenantCard";
import UnitsCard from "../../components/cards/OwnerCards/UnitsCard";
import OwnerSidebar from "../../components/layouts/OwnerSidebar";
import RecentActivity from "../../components/sections/owner/RecentActivity";

const OwnerDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-64">
        <OwnerSidebar />
      </div>

      <div className="flex-1 p-4 lg:p-8">
        <div className="lg:hidden mb-4"></div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Owner Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <PropertiesCard />
          <TenantCard />
          <UnitsCard />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default OwnerDashboard;
