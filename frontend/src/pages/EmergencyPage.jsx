const emergencyCases = [
  { id: 'ER-1024', patient: 'Aisha Mathew', priority: 'Critical', emergency: 'Severe trauma', eta: '4 min' },
  { id: 'ER-1025', patient: 'Victor Lee', priority: 'High', emergency: 'Cardiac arrest', eta: '9 min' },
  { id: 'ER-1026', patient: 'Rachel Gomez', priority: 'Medium', emergency: 'Respiratory distress', eta: '15 min' },
  { id: 'ER-1027', patient: 'David Smith', priority: 'Low', emergency: 'Orthopedic pain', eta: '27 min' },
];

function EmergencyPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Dispatch</p>
          <h2 className="text-2xl font-bold">Emergency Requests</h2>
        </div>
        <button className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white">New Alert</button>
      </div>

      <div className="space-y-3">
        {emergencyCases.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
            <div>
              <div className="font-semibold">{item.patient}</div>
              <div className="text-sm text-slate-500">{item.id} • {item.emergency}</div>
            </div>
            <div className="flex items-center gap-4">
              <span className={`status-pill ${item.priority === 'Critical' ? 'bg-red-100 text-red-700' : item.priority === 'High' ? 'bg-orange-100 text-orange-700' : item.priority === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {item.priority}
              </span>
              <span className="text-sm font-medium text-slate-500">ETA {item.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyPage;
