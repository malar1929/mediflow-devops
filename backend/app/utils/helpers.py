def success_response(message, data=None):
    payload = {"message": message}
    if data is not None:
        payload["data"] = data
    return payload


def error_response(message, status_code=400):
    return {"error": message}, status_code
