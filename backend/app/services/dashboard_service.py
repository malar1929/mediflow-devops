from ..models import Ambulance, BedAvailability, BloodInventory, EmergencyRequest, Hospital, Patient


def get_dashboard_metrics():
    total_patients = Patient.query.count()
    total_hospitals = Hospital.query.count()
    total_ambulances = Ambulance.query.count()
    critical_requests = EmergencyRequest.query.filter_by(priority="critical").count()
    available_beds = sum(item.available_beds for item in BedAvailability.query.all())
    blood_units = sum(item.units_available for item in BloodInventory.query.all())

    return {
        "total_patients": total_patients,
        "total_hospitals": total_hospitals,
        "total_ambulances": total_ambulances,
        "critical_requests": critical_requests,
        "available_beds": available_beds,
        "blood_units": blood_units,
    }


def get_operational_summary():
    emergency_requests = EmergencyRequest.query.order_by(EmergencyRequest.created_at.desc()).limit(5).all()
    hospitals = Hospital.query.order_by(Hospital.beds_available.desc()).limit(5).all()

    return {
        "recent_requests": [
            {
                "id": item.id,
                "priority": item.priority,
                "status": item.status,
                "description": item.description,
            }
            for item in emergency_requests
        ],
        "hospital_capacity": [
            {
                "id": hospital.id,
                "name": hospital.name,
                "beds_available": hospital.beds_available,
                "icu_available": hospital.icu_available,
            }
            for hospital in hospitals
        ],
    }
