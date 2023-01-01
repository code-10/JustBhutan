from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
from rest_framework import status

def GetAllProducts():
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''select * from product''')
        data = cursor.fetchall()
        keys = ["product_id", "product_name", "product_description"]
        result = convertListToJson(data, keys)
        return result
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)

def AddProduct(product_request):
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''insert into product(product_name, product_description)
            values(%s,%s)''', [
                product_request['product_name'], 
                product_request['product_description']
            ])
        return "product added successfully"
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)