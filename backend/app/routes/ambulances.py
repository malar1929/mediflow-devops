from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

from ..extensions import db
from ..models import Ambulance

ambulances_bp = Blueprint("ambulances", __name__, url_prefix="/api/ambulances")


@ambulances_bp.route("", methods=["GET"])
@jwt_required()
def list_ambulances():
    ambulances = Ambulance.query.all()
    return jsonify([
        {
            "id": item.id,
            "registration_number": item.registration_number,
            "status": item.status,
            "current_location": item.current_location,
            "eta_minutes": item.eta_minutes,
            "driver_id": item.driver_id,
            "hospital_id": item.hospital_id,
        }
        for item in ambulances
    ])


@ambulances_bp.route("", methods=["POST"])
@jwt_required()
def create_ambulance():
    data = request.get_json(silent=True) or {}
    ambulance = Ambulance(
        registration_number=data.get("registration_number"),
        status=data.get("status", "available"),
        current_location=data.get("current_location", "Base station"),
        eta_minutes=data.get("eta_minutes", 0),
        driver_id=data.get("driver_id"),
        hospital_id=data.get("hospital_id"),
    )
    db.session.add(ambulance)
    db.session.commit()
    return jsonify({"message": "Ambulance created", "id": ambulance.id}), 201
