from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import CreateResponse

def AddSku(sku_request):
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''insert into sku_quantity(sku_quantity, city_id)
            values(%s,%s) returning sku_quantity_id''', [
                sku_request['sku_quantity'], 
                sku_request['city_id']
            ])
        sku_quantity_id = cursor.fetchone()[0]

        if sku_quantity_id!=None:
            cursor.execute('''insert into sku(product_id, sku_price, sku_description, sku_quantity_id)
                values(%s,%s,%s,%s)''', [
                    sku_request['product_id'], 
                    sku_request['sku_price'],
                    sku_request['sku_description'],
                    sku_quantity_id
                ])
        return "sku added successfully"
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)