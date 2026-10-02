const reports = [
  { title: 'Daily Emergency Volume', trend: '+12%', detail: 'Compared to last week' },
  { title: 'Ambulance Utilization', trend: '+8%', detail: '35 units active' },
  { title: 'Average ETA', trend: '-3.4%', detail: 'Reduced to 12 mins' },
  { title: 'Bed Occupancy', trend: '72%', detail: 'System wide' },
];

function ReportsPage() {
  return (
    <div className="card">
      <div className="mb-5">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Insights</p>
        <h2 className="text-2xl font-bold">Operational Reports</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 p-5">
            <div className="text-sm text-slate-500">{item.title}</div>
            <div className="mt-4 flex items-end justify-between">
              <div className="text-3xl font-bold">{item.trend}</div>
              <span className="status-pill bg-emerald-100 text-emerald-700">Improving</span>
            </div>
            <div className="mt-2 text-sm text-slate-500">{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportsPage;
