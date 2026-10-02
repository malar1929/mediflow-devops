from flask import Blueprint, jsonify

api = Blueprint("api", __name__, url_prefix="/api")


@api.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "ok",
        "service": "MediFlow API",
        "version": "1.0.0"
    })


@api.route("/", methods=["GET"])
def index():
    return jsonify({
        "message": "Welcome to MediFlow API",
        "docs": "/api/health"
    })
