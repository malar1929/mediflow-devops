from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from ..models import BedAvailability

beds_bp = Blueprint("beds", __name__, url_prefix="/api/beds")


@beds_bp.route("", methods=["GET"])
@jwt_required()
def list_beds():
    beds = BedAvailability.query.all()
    return jsonify([
        {
            "id": item.id,
            "hospital_id": item.hospital_id,
            "total_beds": item.total_beds,
            "available_beds": item.available_beds,
            "icu_beds": item.icu_beds,
            "ventilators": item.ventilators,
        }
        for item in beds
    ])
