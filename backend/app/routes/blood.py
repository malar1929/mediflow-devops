from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from ..models import BloodInventory

blood_bp = Blueprint("blood", __name__, url_prefix="/api/blood")


@blood_bp.route("", methods=["GET"])
@jwt_required()
def list_blood_inventory():
    inventory = BloodInventory.query.all()
    return jsonify([
        {
            "id": item.id,
            "hospital_id": item.hospital_id,
            "blood_group": item.blood_group,
            "units_available": item.units_available,
        }
        for item in inventory
    ])
