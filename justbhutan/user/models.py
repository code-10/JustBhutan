from django.db import models
import jwt,json
from django.http import JsonResponse
from django.http.response import HttpResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
from justbhutan.utility.excel import ExportDataToExcel
from justbhutan.utility.custom_datetime import GetDateTime
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
import bcrypt

def UserRegistration(user_request):
    db_connection = connections['default']
    try:
        current_datetime = GetDateTime('Asia/Kolkata')
        cursor = db_connection.cursor()
        hashed_password = bcrypt.hashpw(user_request['password'], bcrypt.gensalt())

        cursor.execute('''select email_id from justbhutan_user where email_id = %s''', [user_request['email_id']])
        if cursor.rowcount > 0:
            return "User with this Email exists, Please Login"

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

def UserLogin(login_request):
    db_connection = connections['default']
    try:
        result = ""
        cursor = db_connection.cursor()
        email_id = login_request['email_id']
        password = login_request['password']
        cursor.execute('''select password from justbhutan_user where email_id = %s''',[email_id])

        if cursor.rowcount == 0:
            result = "Please register to continue"
            return result
        elif cursor.rowcount > 0:
            db_password = cursor.fetchone()[0]
            is_password = bcrypt.checkpw(password, db_password)
            if is_password == False:
                result = "Wrong Password, please check your password and try again"
                return result
            else:

                cursor.execute('''
                    select justbhutan_user.user_id, 
                    justbhutan_user.email_id, 
                    user_access_role.access_role_id, 
                    access_role.access_role_name 
                    from justbhutan_user 
                    inner join user_access_role 
                    on justbhutan_user.user_id = user_access_role.user_id 
                    inner join access_role on 
                    user_access_role.access_role_id = access_role.access_role_id 
                    where justbhutan_user.email_id = %s''',[email_id])
                user_details = cursor.fetchall()
                
                payload = {
                    'id': user_details[0][0],
                    'email_id': user_details[0][1],
                    'access_role_id': user_details[0][2],
                    'access_role_name': user_details[0][3]
                }
                SECRET_KEY = getattr(settings, "SECRET_KEY", None)
                jwt_token = {'token': jwt.encode(payload, SECRET_KEY), 'email_id':email_id}

                return jwt_token
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)