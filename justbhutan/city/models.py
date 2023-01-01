from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
from rest_framework import status

def GetAllCities():
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''select * from city''')
        data = cursor.fetchall()
        keys = ["city_id", "city_name"]
        result = convertListToJson(data, keys)
        return result
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)