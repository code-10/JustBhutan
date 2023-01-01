from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
from rest_framework import status

def AddSurvey(survey_request):
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''insert into survey(name, email_id, phone_number, pincode, city_id)
            values(%s,%s,%s,%s,%s)''', [
                survey_request['name'], 
                survey_request['email_id'], 
                survey_request['phone_number'], 
                survey_request['pincode'], 
                survey_request['city_id']
            ])
        return "survey added successfully"
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)