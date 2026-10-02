const metrics = [
  { label: 'Critical Cases', value: '28', color: 'bg-red-100 text-red-700' },
  { label: 'High Priority', value: '42', color: 'bg-orange-100 text-orange-700' },
  { label: 'Average Response', value: '12 mins', color: 'bg-brand-100 text-brand-700' },
  { label: 'Hospital Availability', value: '81%', color: 'bg-emerald-100 text-emerald-700' },
];

function AnalyticsPage() {
  return (
    <div className="card">
      <div className="mb-5">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Monitoring</p>
        <h2 className="text-2xl font-bold">Emergency Analytics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-2xl border border-slate-200 p-4">
            <div className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${item.color}`}>{item.label}</div>
            <div className="mt-5 text-3xl font-bold">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalyticsPage;
