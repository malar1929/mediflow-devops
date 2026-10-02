from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required

from ..extensions import db
from ..models import Driver

drivers_bp = Blueprint("drivers", __name__, url_prefix="/api/drivers")


@drivers_bp.route("", methods=["GET"])
@jwt_required()
def list_drivers():
    drivers = Driver.query.all()
    return jsonify([
        {
            "id": item.id,
            "name": item.name,
            "license_number": item.license_number,
            "phone": item.phone,
            "status": item.status,
            "current_location": item.current_location,
            "available": item.available,
        }
        for item in drivers
    ])


@drivers_bp.route("", methods=["POST"])
@jwt_required()
def create_driver():
    data = request.get_json(silent=True) or {}
    driver = Driver(
        name=data.get("name"),
        license_number=data.get("license_number"),
        phone=data.get("phone"),
        status=data.get("status", "available"),
        current_location=data.get("current_location", "Station"),
        available=data.get("available", True),
    )
    db.session.add(driver)
    db.session.commit()
    return jsonify({"message": "Driver created", "id": driver.id}), 201
