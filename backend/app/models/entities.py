from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash

from ..extensions import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(30), nullable=False, default="admin")
    phone = db.Column(db.String(20), nullable=True)
    status = db.Column(db.String(20), default="active")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


class Hospital(db.Model):
    __tablename__ = "hospitals"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    code = db.Column(db.String(30), nullable=False, unique=True)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    capacity = db.Column(db.Integer, default=0)
    beds_available = db.Column(db.Integer, default=0)
    icu_available = db.Column(db.Integer, default=0)
    ventilators_available = db.Column(db.Integer, default=0)
    emergency_contact = db.Column(db.String(50), nullable=True)
    latitude = db.Column(db.Float, default=0.0)
    longitude = db.Column(db.Float, default=0.0)
    is_active = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Patient(db.Model):
    __tablename__ = "patients"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(20), nullable=False)
    condition = db.Column(db.String(120), nullable=False)
    priority = db.Column(db.String(20), default="medium")
    status = db.Column(db.String(30), default="triage")
    hospital_id = db.Column(db.Integer, db.ForeignKey("hospitals.id"), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Ambulance(db.Model):
    __tablename__ = "ambulances"

    id = db.Column(db.Integer, primary_key=True)
    registration_number = db.Column(db.String(40), unique=True, nullable=False)
    status = db.Column(db.String(30), default="available")
    current_location = db.Column(db.String(150), nullable=False)
    eta_minutes = db.Column(db.Integer, default=0)
    driver_id = db.Column(db.Integer, db.ForeignKey("drivers.id"), nullable=True)
    hospital_id = db.Column(db.Integer, db.ForeignKey("hospitals.id"), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Driver(db.Model):
    __tablename__ = "drivers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    license_number = db.Column(db.String(40), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(25), default="available")
    current_location = db.Column(db.String(150), nullable=False)
    available = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class EmergencyRequest(db.Model):
    __tablename__ = "emergency_requests"

    id = db.Column(db.Integer, primary_key=True)
    patient_id = db.Column(db.Integer, db.ForeignKey("patients.id"), nullable=False)
    hospital_id = db.Column(db.Integer, db.ForeignKey("hospitals.id"), nullable=True)
    ambulance_id = db.Column(db.Integer, db.ForeignKey("ambulances.id"), nullable=True)
    priority = db.Column(db.String(20), default="medium")
    status = db.Column(db.String(25), default="pending")
    latitude = db.Column(db.Float, default=0.0)
    longitude = db.Column(db.Float, default=0.0)
    description = db.Column(db.Text, nullable=False)
    eta_minutes = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class BedAvailability(db.Model):
    __tablename__ = "bed_availability"

    id = db.Column(db.Integer, primary_key=True)
    hospital_id = db.Column(db.Integer, db.ForeignKey("hospitals.id"), nullable=False)
    total_beds = db.Column(db.Integer, default=0)
    available_beds = db.Column(db.Integer, default=0)
    icu_beds = db.Column(db.Integer, default=0)
    ventilators = db.Column(db.Integer, default=0)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class BloodInventory(db.Model):
    __tablename__ = "blood_inventory"

    id = db.Column(db.Integer, primary_key=True)
    hospital_id = db.Column(db.Integer, db.ForeignKey("hospitals.id"), nullable=False)
    blood_group = db.Column(db.String(10), nullable=False)
    units_available = db.Column(db.Integer, default=0)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Notification(db.Model):
    __tablename__ = "notifications"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(150), nullable=False)
    message = db.Column(db.Text, nullable=False)
    type = db.Column(db.String(30), default="info")
    read = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class AuditLog(db.Model):
    __tablename__ = "audit_logs"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=True)
    action = db.Column(db.String(150), nullable=False)
    entity_type = db.Column(db.String(80), nullable=False)
    entity_id = db.Column(db.Integer, nullable=True)
    details = db.Column("metadata", db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
