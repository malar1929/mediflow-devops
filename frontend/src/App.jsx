import { useMemo, useState } from 'react';
import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import HospitalsPage from './pages/HospitalsPage';
import AmbulancesPage from './pages/AmbulancesPage';
import DriversPage from './pages/DriversPage';
import EmergencyPage from './pages/EmergencyPage';
import BedsPage from './pages/BedsPage';
import BloodBankPage from './pages/BloodBankPage';
import ReportsPage from './pages/ReportsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProfilePage from './pages/ProfilePage';

const navItems = [
  { name: 'Dashboard', to: '/app/dashboard', icon: '📊' },
  { name: 'Patients', to: '/app/patients', icon: '🧑‍⚕️' },
  { name: 'Hospitals', to: '/app/hospitals', icon: '🏥' },
  { name: 'Ambulances', to: '/app/ambulances', icon: '🚑' },
  { name: 'Drivers', to: '/app/drivers', icon: '👨‍✈️' },
  { name: 'Emergency', to: '/app/emergency', icon: '🚨' },
  { name: 'Beds', to: '/app/beds', icon: '🛏️' },
  { name: 'Blood Bank', to: '/app/blood-bank', icon: '🩸' },
  { name: 'Reports', to: '/app/reports', icon: '📄' },
  { name: 'Analytics', to: '/app/analytics', icon: '📈' },
  { name: 'Profile', to: '/app/profile', icon: '👤' },
];

function AppLayout() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('mediflow_user') || '{"name":"Admin User","role":"Admin"}'));

  const initials = useMemo(() => {
    return user?.name?.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase() || 'AU';
  }, [user]);

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">
      <aside className="w-72 bg-slate-900 text-slate-100 p-5 shadow-xl hidden md:block">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-xl bg-brand-500 p-2 text-xl">M</div>
          <div>
            <div className="text-xl font-bold">MediFlow</div>
            <div className="text-xs text-slate-300">Emergency Response</div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  isActive ? 'bg-brand-500 text-white' : 'text-slate-200 hover:bg-slate-800'
                }`
              }
            >
              <span>{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8">
        <header className="mb-8 flex items-center justify-between rounded-2xl bg-white p-4 shadow-soft">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-700">Operations Center</p>
            <h1 className="text-2xl font-bold">Smart Hospital Command</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 font-bold text-brand-700">
                {initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{user.name}</div>
                <div className="text-xs text-slate-500">{user.role}</div>
              </div>
            </div>
            <button
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
              onClick={() => {
                localStorage.removeItem('mediflow_user');
                localStorage.removeItem('mediflow_token');
                window.location.href = '/';
              }}
            >
              Logout
            </button>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(localStorage.getItem('mediflow_token')));

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />

      <Route
        path="/app/*"
        element={isAuthenticated ? <AppLayout /> : <Navigate to="/" replace />}
      >
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="patients" element={<PatientsPage />} />
        <Route path="hospitals" element={<HospitalsPage />} />
        <Route path="ambulances" element={<AmbulancesPage />} />
        <Route path="drivers" element={<DriversPage />} />
        <Route path="emergency" element={<EmergencyPage />} />
        <Route path="beds" element={<BedsPage />} />
        <Route path="blood-bank" element={<BloodBankPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
