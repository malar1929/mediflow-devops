CREATE DATABASE IF NOT EXISTS mediflow;
USE mediflow;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(30) NOT NULL DEFAULT 'admin',
    phone VARCHAR(20),
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS hospitals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    code VARCHAR(30) NOT NULL UNIQUE,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    capacity INT DEFAULT 0,
    beds_available INT DEFAULT 0,
    icu_available INT DEFAULT 0,
    ventilators_available INT DEFAULT 0,
    emergency_contact VARCHAR(50),
    latitude DOUBLE DEFAULT 0,
    longitude DOUBLE DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    condition VARCHAR(120) NOT NULL,
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(30) DEFAULT 'triage',
    hospital_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (hospital_id) REFERENCES hospitals(id)
);

CREATE TABLE IF NOT EXISTS drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    license_number VARCHAR(40) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    status VARCHAR(25) DEFAULT 'available',
    current_location VARCHAR(150) NOT NULL,
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ambulances (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_number VARCHAR(40) NOT NULL UNIQUE,
    status VARCHAR(30) DEFAULT 'available',
    current_location VARCHAR(150) NOT NULL,
    eta_minutes INT DEFAULT 0,
    driver_id INT,
    hospital_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (driver_id) REFERENCES drivers(id),
    FOREIGN KEY (hospital_id) REFERENCES hospitals(id)
);

CREATE TABLE IF NOT EXISTS emergency_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    hospital_id INT,
    ambulance_id INT,
    priority VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(25) DEFAULT 'pending',
    latitude DOUBLE DEFAULT 0,
    longitude DOUBLE DEFAULT 0,
    description TEXT NOT NULL,
    eta_minutes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (hospital_id) REFERENCES hospitals(id),
    FOREIGN KEY (ambulance_id) REFERENCES ambulances(id)
);

CREATE TABLE IF NOT EXISTS bed_availability (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_id INT NOT NULL,
    total_beds INT DEFAULT 0,
    available_beds INT DEFAULT 0,
    icu_beds INT DEFAULT 0,
    ventilators INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (hospital_id) REFERENCES hospitals(id)
);

CREATE TABLE IF NOT EXISTS blood_inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_id INT NOT NULL,
    blood_group VARCHAR(10) NOT NULL,
    units_available INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (hospital_id) REFERENCES hospitals(id)
);

CREATE TABLE IF NOT EXISTS notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(30) DEFAULT 'info',
    read_flag BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(150) NOT NULL,
    entity_type VARCHAR(80) NOT NULL,
    entity_id INT,
    metadata TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password_hash, role, phone, status)
VALUES
('System Admin', 'admin@mediflow.com', '$2b$12$gIuNyGkG71n8Hq7B6L5yu.bMFGQ0g2/sS62gB4i7GGQYfHclc1dQa', 'admin', '555-1001', 'active'),
('Hospital Manager', 'manager@mediflow.com', '$2b$12$gIuNyGkG71n8Hq7B6L5yu.bMFGQ0g2/sS62gB4i7GGQYfHclc1dQa', 'hospital', '555-1002', 'active');

INSERT INTO hospitals (name, code, city, state, capacity, beds_available, icu_available, ventilators_available, emergency_contact, latitude, longitude, is_active)
VALUES
('City General Hospital', 'CGH-01', 'New York', 'NY', 500, 120, 28, 14, '555-2201', 40.7128, -74.0060, TRUE),
('Mercy Care Center', 'MCC-02', 'Chicago', 'IL', 420, 98, 18, 11, '555-2202', 41.8781, -87.6298, TRUE),
('Sunrise Medical Center', 'SMC-03', 'Los Angeles', 'CA', 390, 88, 20, 12, '555-2203', 34.0522, -118.2437, TRUE);

INSERT INTO patients (name, age, gender, condition, priority, status, hospital_id)
VALUES
('Aisha Mathew', 34, 'female', 'Trauma', 'critical', 'triage', 1),
('Victor Lee', 55, 'male', 'Cardiac', 'high', 'monitoring', 2),
('Rachel Gomez', 29, 'female', 'Respiratory distress', 'medium', 'observation', 3),
('David Smith', 45, 'male', 'Orthopedic injury', 'low', 'discharge-ready', 1);

INSERT INTO drivers (name, license_number, phone, status, current_location, available)
VALUES
('Sanjay Kumar', 'DL-81492', '555-3001', 'on-duty', 'Downtown Sector 2', TRUE),
('Alan Lewis', 'DL-61141', '555-3002', 'available', 'Central Depot', TRUE),
('Priya Nair', 'DL-42516', '555-3003', 'assigned', 'Old City Zone', FALSE);

INSERT INTO ambulances (registration_number, status, current_location, eta_minutes, driver_id, hospital_id)
VALUES
('AMB-210', 'en_route', 'Downtown Sector 2', 7, 1, 1),
('AMB-312', 'available', 'Central Depot', 0, 2, NULL),
('AMB-415', 'assigned', 'Old City Zone', 11, 3, 2);

INSERT INTO emergency_requests (patient_id, hospital_id, ambulance_id, priority, status, latitude, longitude, description, eta_minutes)
VALUES
(1, 1, 1, 'critical', 'dispatched', 40.7128, -74.0060, 'Severe trauma with unstable vitals', 4),
(2, 2, 3, 'high', 'assigned', 41.8781, -87.6298, 'Cardiac emergency requiring immediate response', 9),
(3, 3, 2, 'medium', 'pending', 34.0522, -118.2437, 'Respiratory distress under assessment', 15);

INSERT INTO bed_availability (hospital_id, total_beds, available_beds, icu_beds, ventilators)
VALUES
(1, 200, 76, 24, 10),
(2, 180, 54, 16, 8),
(3, 150, 48, 14, 7);

INSERT INTO blood_inventory (hospital_id, blood_group, units_available)
VALUES
(1, 'A+', 48),
(1, 'O-', 18),
(2, 'B+', 39),
(2, 'AB+', 22),
(3, 'A-', 16);

INSERT INTO notifications (user_id, title, message, type, read_flag)
VALUES
(1, 'Critical dispatch', 'Ambulance AMB-210 assigned to trauma case', 'alert', FALSE),
(2, 'Bed update', 'City General available beds increased by 4', 'info', FALSE);

INSERT INTO audit_logs (user_id, action, entity_type, entity_id, metadata)
VALUES
(1, 'user_login', 'users', 1, '{"source": "web"}'),
(2, 'bed_update', 'bed_availability', 1, '{"available_beds": 76}');
