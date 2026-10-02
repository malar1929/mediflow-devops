import { ambulanceFleet } from '../data/mockData';

function AmbulancesPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Fleet</p>
          <h2 className="text-2xl font-bold">Ambulance Status</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Assign Ambulance</button>
      </div>

      <div className="table-grid">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Unit</th>
              <th className="px-4 py-3">Driver</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">ETA</th>
            </tr>
          </thead>
          <tbody>
            {ambulanceFleet.map((item) => (
              <tr key={item.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium">{item.id}</td>
                <td className="px-4 py-3">{item.driver}</td>
                <td className="px-4 py-3">
                  <span className={`status-pill ${item.status === 'En Route' ? 'bg-brand-100 text-brand-700' : item.status === 'Assigned' ? 'bg-amber-100 text-amber-700' : item.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.location}</td>
                <td className="px-4 py-3">{item.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AmbulancesPage;
