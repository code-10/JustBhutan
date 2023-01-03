from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
from justbhutan.utility.excel import ExportDataToExcel
from justbhutan.utility.custom_datetime import GetDateTime
from django.contrib.auth.hashers import make_password, check_password

def AddUser(user_request):
    db_connection = connections['default']
    try:
        current_datetime = GetDateTime('Asia/Kolkata')
        cursor = db_connection.cursor()
        hashed_password = make_password(user_request['password'])
        cursor.execute('''
            insert into justbhutan_user(email_id, password, user_creation_date)
            values(%s,%s,%s) returning user_id''', 
            [
                user_request['email_id'],
                hashed_password,
                current_datetime
            ]
        )
        user_id = cursor.fetchone()[0]

        cursor.execute('''insert into user_access_role(user_id,access_role_id)
            values(%s,%s)''', 
            [
                user_id,
                1
            ])

        if('first_name' in user_request.keys() and
                'last_name' in user_request.keys() and
                'address' in user_request.keys() and
                'city' in user_request.keys() and
                'state' in user_request.keys() and
                'country' in user_request.keys() and
                'phone_number' in user_request.keys() and
                'pincode' in user_request.keys()):
            cursor.execute('''
                insert into user_detail(
                    user_id,
                    first_name,
                    last_name,
                    address, 
                    city, 
                    state,
                    country, 
                    phone_number, 
                    pincode
                )
                values(%s,%s,%s,%s,%s,%s,%s,%s,%s)''',
                [
                    user_id,
                    user_request['first_name'],
                    user_request['last_name'],
                    user_request['address'],
                    user_request['city'],
                    user_request['state'],
                    user_request['country'],
                    user_request['phone_number'],
                    user_request['pincode']
                ]
            )
        return "user added successfully"
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)

