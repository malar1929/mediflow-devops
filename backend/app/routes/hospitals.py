from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

from ..extensions import db
from ..models import Hospital

hospitals_bp = Blueprint("hospitals", __name__, url_prefix="/api/hospitals")


@hospitals_bp.route("", methods=["GET"])
@jwt_required()
def list_hospitals():
    hospitals = Hospital.query.all()
    return jsonify([
        {
            "id": item.id,
            "name": item.name,
            "code": item.code,
            "city": item.city,
            "state": item.state,
            "beds_available": item.beds_available,
            "icu_available": item.icu_available,
            "ventilators_available": item.ventilators_available,
            "capacity": item.capacity,
            "emergency_contact": item.emergency_contact,
        }
        for item in hospitals
    ])


@hospitals_bp.route("", methods=["POST"])
@jwt_required()
def create_hospital():
    data = request.get_json(silent=True) or {}
    hospital = Hospital(
        name=data.get("name"),
        code=data.get("code"),
        city=data.get("city"),
        state=data.get("state"),
        capacity=data.get("capacity", 0),
        beds_available=data.get("beds_available", 0),
        icu_available=data.get("icu_available", 0),
        ventilators_available=data.get("ventilators_available", 0),
        emergency_contact=data.get("emergency_contact"),
        latitude=data.get("latitude", 0.0),
        longitude=data.get("longitude", 0.0),
    )
    db.session.add(hospital)
    db.session.commit()
    return jsonify({"message": "Hospital created", "id": hospital.id}), 201


@hospitals_bp.route("/<int:hospital_id>", methods=["GET"])
@jwt_required()
def get_hospital(hospital_id):
    hospital = Hospital.query.get_or_404(hospital_id)
    return jsonify({
        "id": hospital.id,
        "name": hospital.name,
        "code": hospital.code,
        "city": hospital.city,
        "state": hospital.state,
        "capacity": hospital.capacity,
        "beds_available": hospital.beds_available,
        "icu_available": hospital.icu_available,
        "ventilators_available": hospital.ventilators_available,
        "emergency_contact": hospital.emergency_contact,
    })
