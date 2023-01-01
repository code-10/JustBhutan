from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
from rest_framework import status

def GetAllSubCategories():
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''select * from sub_category''')
        data = cursor.fetchall()
        keys = ["sub_category_id", "sub_category_name", "category_id"]
        result = convertListToJson(data, keys)
        return result
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)