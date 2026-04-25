const RecentActivity = () => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm mt-8">
      <div className="card-body border-b border-base-200 flex flex-row items-center justify-between py-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <button className="text-primary text-sm font-semibold hover:underline">
          View Ledger
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-base-content/60">
              <th>Tenant</th>
              <th>Property / Unit</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-primary/10 text-primary rounded-full w-8">
                      <span className="text-xs font-bold">EJ</span>
                    </div>
                  </div>
                  <span className="font-medium">Emily Johnson</span>
                </div>
              </td>

              <td className="text-sm opacity-70">Grand Plaza, #402</td>
              <td className="text-sm opacity-60">Oct 12, 2023</td>
              <td className="font-bold">$2,800</td>

              <td>
                <span className="badge badge-success badge-sm">Paid</span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-warning/10 text-warning rounded-full w-8">
                      <span className="text-xs font-bold">MR</span>
                    </div>
                  </div>
                  <span className="font-medium">Marcus Reed</span>
                </div>
              </td>

              <td className="text-sm opacity-70">Maple Heights, #12</td>
              <td className="text-sm opacity-60">Oct 11, 2023</td>
              <td className="font-bold">$1,950</td>

              <td>
                <span className="badge badge-warning badge-sm">Pending</span>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-info/10 text-info rounded-full w-8">
                      <span className="text-xs font-bold">SC</span>
                    </div>
                  </div>
                  <span className="font-medium">Sarah Chen</span>
                </div>
              </td>

              <td className="text-sm opacity-70">Riverside Apts, #B4</td>
              <td className="text-sm opacity-60">Oct 10, 2023</td>
              <td className="font-bold">$2,200</td>

              <td>
                <span className="badge badge-success badge-sm">Paid</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
