from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from ..models import Ambulance, EmergencyRequest, Hospital, Patient

reports_bp = Blueprint("reports", __name__, url_prefix="/api/reports")


@reports_bp.route("", methods=["GET"])
@jwt_required()
def report_summary():
    return jsonify({
        "patients": Patient.query.count(),
        "hospitals": Hospital.query.count(),
        "ambulances": Ambulance.query.count(),
        "emergency_requests": EmergencyRequest.query.count(),
        "priorities": {
            "low": EmergencyRequest.query.filter_by(priority="low").count(),
            "medium": EmergencyRequest.query.filter_by(priority="medium").count(),
            "high": EmergencyRequest.query.filter_by(priority="high").count(),
            "critical": EmergencyRequest.query.filter_by(priority="critical").count(),
        },
    })
