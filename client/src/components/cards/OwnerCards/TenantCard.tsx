import { MessageSquare, Users } from "lucide-react";

const TenantCard = () => {
  return (
    <div className="card bg-base-100 shadow border border-base-200">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm opacity-60">Tenants</h2>
            <p className="text-3xl font-bold">
              142 <span className="text-sm font-normal opacity-60">Active</span>
            </p>
          </div>
          <Users />
        </div>

        {/* Payment Status */}
        <div className="bg-primary text-primary-content p-4 rounded-xl mt-4">
          <p className="text-xs opacity-80">Payment Status</p>
          <p className="text-xl font-bold">98% On-time</p>
          <p className="text-xs opacity-70">Last billing cycle</p>
        </div>

        {/* Actions */}
        <div className="mt-4 space-y-2">
          <button className="btn btn-outline btn-sm w-full justify-start gap-2">
            <MessageSquare size={16} />
            Message Tenant
          </button>

          <button className="btn btn-outline btn-sm w-full">
            View Profiles
          </button>
        </div>

        <div className="flex mt-4 -space-x-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
            </div>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
            </div>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantCard;
