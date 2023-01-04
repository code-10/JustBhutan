from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import CreateResponse
from rest_framework import status

def GetAllSubCategories():
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''select * from sub_category''')
        data = cursor.fetchall()
        columns = [col[0] for col in cursor.description]
        return CreateResponse(columns, data)
        return result
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)