from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

from ..models import Notification

notifications_bp = Blueprint("notifications", __name__, url_prefix="/api/notifications")


@notifications_bp.route("", methods=["GET"])
@jwt_required()
def list_notifications():
    notifications = Notification.query.order_by(Notification.created_at.desc()).all()
    return jsonify([
        {
            "id": item.id,
            "user_id": item.user_id,
            "title": item.title,
            "message": item.message,
            "type": item.type,
            "read": item.read,
        }
        for item in notifications
    ])
