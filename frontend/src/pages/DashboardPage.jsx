import { emergencyQueue, hospitalSummary, stats } from '../data/mockData';

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="card">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.color}`}>
              {item.trend}
            </div>
            <div className="mt-4 text-3xl font-bold">{item.value}</div>
            <div className="mt-1 text-sm text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Emergency Queue</h2>
            <span className="text-sm text-slate-500">Live dispatch</span>
          </div>

          <div className="space-y-3">
            {emergencyQueue.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                <div>
                  <div className="font-semibold">{item.patient}</div>
                  <div className="text-sm text-slate-500">{item.id} • {item.hospital}</div>
                </div>
                <div className="text-right">
                  <span className={`status-pill ${item.priority === 'Critical' ? 'bg-red-100 text-red-700' : item.priority === 'High' ? 'bg-orange-100 text-orange-700' : item.priority === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                    {item.priority}
                  </span>
                  <div className="mt-1 text-sm text-slate-500">ETA {item.eta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Hospital Capacity</h2>
            <span className="text-sm text-slate-500">Bed load</span>
          </div>

          <div className="space-y-4">
            {hospitalSummary.map((item) => (
              <div key={item.name}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-slate-500">{item.beds} beds</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-brand-500" style={{ width: `${Math.min((item.beds / 100) * 100, 100)}%` }} />
                </div>
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>ICU: {item.icu}</span>
                  <span>Ventilators: {item.ventilators}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
