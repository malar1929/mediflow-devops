export const stats = [
  { label: 'Active Patients', value: '1,284', trend: '+12.4%', color: 'bg-brand-50 text-brand-700' },
  { label: 'Critical Alerts', value: '28', trend: '+7.2%', color: 'bg-red-50 text-red-600' },
  { label: 'Available Beds', value: '432', trend: '+18.1%', color: 'bg-emerald-50 text-emerald-700' },
  { label: 'Avg. Response', value: '12 min', trend: '-3.4%', color: 'bg-amber-50 text-amber-700' },
];

export const emergencyQueue = [
  { id: 'ER-1024', patient: 'Aisha Mathew', priority: 'Critical', eta: '4 min', hospital: 'City General' },
  { id: 'ER-1025', patient: 'Victor Lee', priority: 'High', eta: '9 min', hospital: 'Mercy Care' },
  { id: 'ER-1026', patient: 'Rachel Gomez', priority: 'Medium', eta: '15 min', hospital: 'Sunrise Hospital' },
  { id: 'ER-1027', patient: 'David Smith', priority: 'Low', eta: '27 min', hospital: 'North City Hospital' },
];

export const hospitalSummary = [
  { name: 'City General Hospital', beds: 85, icu: 22, ventilators: 10 },
  { name: 'Mercy Care Center', beds: 72, icu: 16, ventilators: 8 },
  { name: 'Sunrise Medical', beds: 61, icu: 18, ventilators: 6 },
  { name: 'North City Hospital', beds: 54, icu: 14, ventilators: 7 },
];

export const patientRecords = [
  { id: 101, name: 'Aisha Mathew', age: 34, condition: 'Trauma', priority: 'Critical', status: 'Triage', hospital: 'City General' },
  { id: 102, name: 'Victor Lee', age: 55, condition: 'Cardiac', priority: 'High', status: 'Monitoring', hospital: 'Mercy Care' },
  { id: 103, name: 'Rachel Gomez', age: 29, condition: 'Respiratory', priority: 'Medium', status: 'Observation', hospital: 'Sunrise Hospital' },
  { id: 104, name: 'David Smith', age: 45, condition: 'Orthopedic', priority: 'Low', status: 'Discharge Ready', hospital: 'North City Hospital' },
];

export const ambulanceFleet = [
  { id: 'AMB-210', driver: 'Sanjay Kumar', status: 'En Route', eta: '7 min', location: 'Downtown Sector 2' },
  { id: 'AMB-312', driver: 'Alan Lewis', status: 'Available', eta: 'Now', location: 'Central Depot' },
  { id: 'AMB-415', driver: 'Priya Nair', status: 'Assigned', eta: '11 min', location: 'Old City Zone' },
  { id: 'AMB-510', driver: 'Mason Hill', status: 'On Call', eta: '16 min', location: 'Airport Road' },
];

export const bloodInventory = [
  { group: 'A+', units: 48 },
  { group: 'A-', units: 16 },
  { group: 'B+', units: 39 },
  { group: 'AB+', units: 22 },
  { group: 'O-', units: 18 },
];
