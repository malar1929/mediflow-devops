from .api import api
from .auth import auth_bp
from .dashboard import dashboard_bp
from .hospitals import hospitals_bp
from .patients import patients_bp
from .ambulances import ambulances_bp
from .drivers import drivers_bp
from .emergencies import emergencies_bp
from .beds import beds_bp
from .blood import blood_bp
from .notifications import notifications_bp
from .reports import reports_bp
from .analytics import analytics_bp

__all__ = [
    "api",
    "auth_bp",
    "dashboard_bp",
    "hospitals_bp",
    "patients_bp",
    "ambulances_bp",
    "drivers_bp",
    "emergencies_bp",
    "beds_bp",
    "blood_bp",
    "notifications_bp",
    "reports_bp",
    "analytics_bp",
]
