import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('admin@mediflow.com');
  const [password, setPassword] = useState('admin123');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mediflow_token', 'demo-token');
    localStorage.setItem('mediflow_user', JSON.stringify({ name: 'Admin User', role: 'Administrator' }));
    onLogin();
    navigate('/app/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-100 via-slate-100 to-slate-200 p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-soft lg:grid-cols-2">
        <div className="bg-slate-900 p-10 text-slate-50">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 font-bold text-white">M</div>
            <div>
              <div className="text-2xl font-bold">MediFlow</div>
              <div className="text-sm text-slate-300">Smart Hospital Emergency Command</div>
            </div>
          </div>

          <h1 className="text-4xl font-bold leading-tight">Coordinating Life-Critical Care Across Every Hospital.</h1>
          <p className="mt-5 text-slate-300">
            Monitor emergency events, route ambulances, manage beds, and track hospital readiness in real time.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Secure Access</p>
            <h2 className="mt-2 text-3xl font-bold">Welcome back</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-brand-500"
                placeholder="admin@mediflow.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500"
                placeholder="••••••••"
              />
            </div>

            <button type="submit" className="w-full rounded-xl bg-brand-500 px-4 py-3 text-base font-semibold text-white shadow-soft hover:bg-brand-700 transition">
              Sign in to MediFlow
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
