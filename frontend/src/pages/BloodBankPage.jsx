import { bloodInventory } from '../data/mockData';

function BloodBankPage() {
  return (
    <div className="card">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Inventory</p>
          <h2 className="text-2xl font-bold">Blood Bank</h2>
        </div>
        <button className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white">Update Stock</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {bloodInventory.map((item) => (
          <div key={item.group} className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-600">{item.group}</span>
              <span className="status-pill bg-red-100 text-red-700">Available</span>
            </div>
            <div className="mt-5 text-3xl font-bold">{item.units}</div>
            <div className="text-sm text-slate-500">Units</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodBankPage;
