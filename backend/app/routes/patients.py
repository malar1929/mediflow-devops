from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

from ..extensions import db
from ..models import Patient

patients_bp = Blueprint("patients", __name__, url_prefix="/api/patients")


@patients_bp.route("", methods=["GET"])
@jwt_required()
def list_patients():
    patients = Patient.query.all()
    return jsonify([
        {
            "id": item.id,
            "name": item.name,
            "age": item.age,
            "gender": item.gender,
            "condition": item.condition,
            "priority": item.priority,
            "status": item.status,
            "hospital_id": item.hospital_id,
        }
        for item in patients
    ])


@patients_bp.route("", methods=["POST"])
@jwt_required()
def create_patient():
    data = request.get_json(silent=True) or {}
    patient = Patient(
        name=data.get("name"),
        age=data.get("age"),
        gender=data.get("gender"),
        condition=data.get("condition"),
        priority=data.get("priority", "medium"),
        status=data.get("status", "triage"),
        hospital_id=data.get("hospital_id"),
    )
    db.session.add(patient)
    db.session.commit()
    return jsonify({"message": "Patient created", "id": patient.id}), 201
