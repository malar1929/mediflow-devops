from marshmallow import Schema, fields, validate


class UserSchema(Schema):
    name = fields.String(required=True, validate=validate.Length(min=2, max=100))
    email = fields.Email(required=True)
    password = fields.String(required=True, validate=validate.Length(min=6))
    role = fields.String(load_default="admin")


class HospitalSchema(Schema):
    name = fields.String(required=True)
    code = fields.String(required=True)
    city = fields.String(required=True)
    state = fields.String(required=True)
    beds_available = fields.Integer(load_default=0)
    icu_available = fields.Integer(load_default=0)
    ventilators_available = fields.Integer(load_default=0)


class EmergencyRequestSchema(Schema):
    patient_id = fields.Integer(required=True)
    hospital_id = fields.Integer(load_default=None)
    ambulance_id = fields.Integer(load_default=None)
    priority = fields.String(validate=validate.OneOf(["low", "medium", "high", "critical"]))
    description = fields.String(required=True)
