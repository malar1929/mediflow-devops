from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

from ..extensions import db
from ..models import EmergencyRequest

emergencies_bp = Blueprint("emergencies", __name__, url_prefix="/api/emergencies")


@emergencies_bp.route("", methods=["GET"])
@jwt_required()
def list_emergencies():
    emergencies = EmergencyRequest.query.order_by(EmergencyRequest.created_at.desc()).all()
    return jsonify([
        {
            "id": item.id,
            "patient_id": item.patient_id,
            "hospital_id": item.hospital_id,
            "ambulance_id": item.ambulance_id,
            "priority": item.priority,
            "status": item.status,
            "eta_minutes": item.eta_minutes,
            "description": item.description,
            "latitude": item.latitude,
            "longitude": item.longitude,
        }
        for item in emergencies
    ])


@emergencies_bp.route("", methods=["POST"])
@jwt_required()
def create_emergency():
    data = request.get_json(silent=True) or {}
    emergency = EmergencyRequest(
        patient_id=data.get("patient_id"),
        hospital_id=data.get("hospital_id"),
        ambulance_id=data.get("ambulance_id"),
        priority=data.get("priority", "medium"),
        status=data.get("status", "pending"),
        latitude=data.get("latitude", 0.0),
        longitude=data.get("longitude", 0.0),
        description=data.get("description", "Emergency request"),
        eta_minutes=data.get("eta_minutes", 0),
    )
    db.session.add(emergency)
    db.session.commit()
    return jsonify({"message": "Emergency request created", "id": emergency.id}), 201
