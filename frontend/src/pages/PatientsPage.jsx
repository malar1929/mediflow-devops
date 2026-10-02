import { patientRecords } from '../data/mockData';

function PatientsPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Patient Registry</p>
          <h2 className="text-2xl font-bold">Active Patients</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Add Patient</button>
      </div>

      <div className="table-grid">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Condition</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Hospital</th>
            </tr>
          </thead>
          <tbody>
            {patientRecords.map((patient) => (
              <tr key={patient.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium">{patient.name}</td>
                <td className="px-4 py-3">{patient.age}</td>
                <td className="px-4 py-3">{patient.condition}</td>
                <td className="px-4 py-3">
                  <span className={`status-pill ${patient.priority === 'Critical' ? 'bg-red-100 text-red-700' : patient.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-amber-100 text-amber-700'}`}>
                    {patient.priority}
                  </span>
                </td>
                <td className="px-4 py-3">{patient.status}</td>
                <td className="px-4 py-3">{patient.hospital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientsPage;
