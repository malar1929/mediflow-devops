from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from ..models import Ambulance, EmergencyRequest, Hospital

analytics_bp = Blueprint("analytics", __name__, url_prefix="/api/analytics")


@analytics_bp.route("", methods=["GET"])
@jwt_required()
def analytics_dashboard():
    priorities = {
        "low": EmergencyRequest.query.filter_by(priority="low").count(),
        "medium": EmergencyRequest.query.filter_by(priority="medium").count(),
        "high": EmergencyRequest.query.filter_by(priority="high").count(),
        "critical": EmergencyRequest.query.filter_by(priority="critical").count(),
    }
    hospitals = Hospital.query.order_by(Hospital.beds_available.desc()).all()
    ambulance_status = {
        "available": Ambulance.query.filter_by(status="available").count(),
        "en_route": Ambulance.query.filter_by(status="en_route").count(),
        "assigned": Ambulance.query.filter_by(status="assigned").count(),
    }
    return jsonify({
        "emergency_priorities": priorities,
        "hospital_performance": [
            {
                "name": item.name,
                "beds_available": item.beds_available,
                "icu_available": item.icu_available,
                "ventilators_available": item.ventilators_available,
            }
            for item in hospitals
        ],
        "ambulance_status": ambulance_status,
    })
