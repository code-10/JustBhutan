from rest_framework.authentication import get_authorization_header
import jwt
from django.db import connections
from django.conf import settings

class TokenAuthentication():
    def __init__(self, get_response):
        """
        One-time configuration and initialisation.
        """
        self.get_response = get_response

    def __call__(self, request):
        """
        Code to be executed for each request before the view (and later
        middleware) are called.
        """
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        """
        Called just before Django calls the view.
        """
        auth = get_authorization_header(request).split()

        request.credentails = {}
        request.message = "Unauthorized"

        if not auth:
            return None

        if len(auth) == 1:
            request.message = 'Invalid token header. No credentials provided.'
        elif len(auth) > 2:
            request.message = 'Invalid token header'

        try:
            token = auth[1]
            if token=="null":
                request.message = 'Null token not allowed'
        except UnicodeError:
            request.message = 'Invalid Token Header. Token string should not contain invalid characters.'

        SECRET_KEY = getattr(settings, "SECRET_KEY", None)
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])

        try:
            if payload != None:
                db_connection = connections['default']
                cursor = db_connection.cursor()
                cursor.execute('''select user_id from justbhutan_user where user_id = %s''',[payload['user_id']])
                if cursor.rowcount != 0:
                    request.credentails = payload
                    request.message = "Authentication Successful"
                else:
                    request.message = "Invalid credentials or user inactive"
            else:
                request.messae = "JWT Decode Error"
        except jwt.ExpiredSignature or jwt.DecodeError or jwt.InvalidTokenError:
            request.message = "JWT Signature Expired or Invalid Token"
        
        return None

    def process_exception(self, request, exception):
        """
        Called when a view raises an exception.
        """
        return None

    def process_template_response(self, request, response):
        """
        Called just after the view has finished executing.
        This code is executed if the response contains a render() method
        """
        return response