import { Building2 } from "lucide-react";

const PropertiesCard = () => {
  return (
    <div className="card bg-base-100 shadow border border-base-200 overflow-hidden">
      <figure className="h-48 relative">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Property"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-3 left-3 text-white">
          <span className="badge badge-primary text-xs">Top Performing</span>
          <p className="font-bold mt-1">The Grand Plaza Residences</p>
        </div>
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-sm text-base-content/70">
            Properties
          </h2>
          <Building2 size={18} />
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">48</span>
          <span className="text-sm opacity-60">Total Properties</span>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Occupancy Rate</span>
            <span className="text-primary font-semibold">92%</span>
          </div>
          <progress
            className="progress progress-primary w-full"
            value="92"
            max="100"
          />
        </div>

        <button className="btn btn-outline btn-sm mt-4">
          Manage Properties
        </button>
      </div>
    </div>
  );
};

export default PropertiesCard;
