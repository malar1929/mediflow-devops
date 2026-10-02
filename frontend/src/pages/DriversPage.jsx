const drivers = [
  { name: 'Sanjay Kumar', license: 'DL-81492', status: 'On Duty', shift: 'Day' },
  { name: 'Alan Lewis', license: 'DL-61141', status: 'Available', shift: 'Night' },
  { name: 'Priya Nair', license: 'DL-42516', status: 'Assigned', shift: 'Day' },
  { name: 'Mason Hill', license: 'DL-28819', status: 'On Duty', shift: 'Night' },
];

function DriversPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Operations</p>
          <h2 className="text-2xl font-bold">Driver Management</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Add Driver</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {drivers.map((item) => (
          <div key={item.license} className="rounded-2xl border border-slate-200 p-4">
            <div className="text-lg font-semibold">{item.name}</div>
            <div className="mt-1 text-sm text-slate-500">{item.license}</div>
            <div className="mt-4 text-sm text-slate-500">Shift: {item.shift}</div>
            <div className="mt-3">
              <span className={`status-pill ${item.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : item.status === 'Assigned' ? 'bg-amber-100 text-amber-700' : 'bg-brand-100 text-brand-700'}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DriversPage;
