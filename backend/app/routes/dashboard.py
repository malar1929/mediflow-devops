from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from ..services.dashboard_service import get_dashboard_metrics, get_operational_summary


dashboard_bp = Blueprint("dashboard", __name__, url_prefix="/api")


@dashboard_bp.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard_summary():
    return jsonify({
        "metrics": get_dashboard_metrics(),
        "summary": get_operational_summary(),
    })
