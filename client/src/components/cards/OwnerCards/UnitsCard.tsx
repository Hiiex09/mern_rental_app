import { DoorOpen } from "lucide-react";

const UnitsCard = () => {
  return (
    <div className="card bg-base-100 shadow border border-base-200">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm opacity-60">Units</h2>
            <p className="text-3xl font-bold">
              156 <span className="text-sm font-normal opacity-60">Total</span>
            </p>
          </div>
          <DoorOpen size={16} />
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-3 bg-base-200 rounded-lg">
            <p className="text-xs opacity-60">Occupied</p>
            <p className="text-xl font-bold">142</p>
          </div>

          <div className="p-3 bg-base-200 rounded-lg">
            <p className="text-xs opacity-60">Vacant</p>
            <p className="text-xl font-bold text-warning">14</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Avg Rent</span>
            <span className="font-bold">$2,450</span>
          </div>

          <div className="flex justify-between">
            <span>Maintenance Health</span>
            <span className="badge badge-success">95%</span>
          </div>

          <div className="flex justify-between">
            <span>Lease Renewals</span>
            <span className="font-bold">8</span>
          </div>
        </div>

        <button className="btn btn-primary btn-sm mt-4">View Units</button>
      </div>
    </div>
  );
};

export default UnitsCard;
