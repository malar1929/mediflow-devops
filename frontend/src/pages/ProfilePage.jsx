function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('mediflow_user') || '{"name":"Admin User","role":"Administrator"}');

  return (
    <div className="card max-w-3xl">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Account</p>
        <h2 className="text-2xl font-bold">Profile Overview</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-brand-100 text-2xl font-bold text-brand-700">
            {user.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()}
          </div>
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-sm text-slate-500">{user.role}</div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="text-sm text-slate-500">Department</div>
            <div className="text-lg font-bold">Emergency Coordination</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="text-sm text-slate-500">Shift</div>
            <div className="text-lg font-bold">07:00 - 19:00</div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="text-sm text-slate-500">Last Login</div>
            <div className="text-lg font-bold">Today, 09:48 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
