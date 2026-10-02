const hospitals = [
  { name: 'City General Hospital', city: 'New York', beds: 142, icu: 24, status: 'Operational' },
  { name: 'Mercy Care Center', city: 'Chicago', beds: 116, icu: 18, status: 'Stable' },
  { name: 'Sunrise Medical', city: 'Los Angeles', beds: 98, icu: 14, status: 'High Demand' },
  { name: 'North City Hospital', city: 'Boston', beds: 77, icu: 12, status: 'Operational' },
];

function HospitalsPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Network</p>
          <h2 className="text-2xl font-bold">Hospital Management</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Add Hospital</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {hospitals.map((item) => (
          <div key={item.name} className="rounded-2xl border border-slate-200 p-4">
            <div className="mb-2 text-lg font-semibold">{item.name}</div>
            <div className="text-sm text-slate-500">{item.city}</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-slate-50 p-2">
                <div className="text-slate-500">Beds</div>
                <div className="font-bold">{item.beds}</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2">
                <div className="text-slate-500">ICU</div>
                <div className="font-bold">{item.icu}</div>
              </div>
            </div>
            <div className="mt-4">
              <span className="status-pill bg-emerald-100 text-emerald-700">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HospitalsPage;
