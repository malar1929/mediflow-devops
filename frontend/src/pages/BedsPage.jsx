const bedStatus = [
  { hospital: 'City General', total: 142, available: 76, icu: 24, ventilators: 10 },
  { hospital: 'Mercy Care', total: 118, available: 58, icu: 18, ventilators: 8 },
  { hospital: 'Sunrise Medical', total: 96, available: 42, icu: 14, ventilators: 6 },
];

function BedsPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Capacity</p>
          <h2 className="text-2xl font-bold">Bed Availability</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Refresh Data</button>
      </div>

      <div className="space-y-4">
        {bedStatus.map((item) => (
          <div key={item.hospital} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{item.hospital}</h3>
              <span className="status-pill bg-emerald-100 text-emerald-700">{item.available} available</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-slate-500">Total beds</div><div className="text-xl font-bold">{item.total}</div></div>
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-slate-500">ICU</div><div className="text-xl font-bold">{item.icu}</div></div>
              <div className="rounded-xl bg-slate-50 p-3"><div className="text-slate-500">Ventilators</div><div className="text-xl font-bold">{item.ventilators}</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BedsPage;
