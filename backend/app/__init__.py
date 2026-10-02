from flask import Flask
from flask_cors import CORS

from .config import Config
from .extensions import db, jwt, migrate, ma
from .routes import api, auth_bp, dashboard_bp, hospitals_bp, patients_bp, ambulances_bp, drivers_bp, emergencies_bp, beds_bp, blood_bp, notifications_bp, reports_bp, analytics_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    app.register_blueprint(api)
    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)
    app.register_blueprint(hospitals_bp)
    app.register_blueprint(patients_bp)
    app.register_blueprint(ambulances_bp)
    app.register_blueprint(drivers_bp)
    app.register_blueprint(emergencies_bp)
    app.register_blueprint(beds_bp)
    app.register_blueprint(blood_bp)
    app.register_blueprint(notifications_bp)
    app.register_blueprint(reports_bp)
    app.register_blueprint(analytics_bp)

    with app.app_context():
        db.create_all()

    return app
