from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.excel import ExportDataToExcel


def AddSurvey(survey_request):
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''insert into survey(name, email_id, phone_number, pincode, city, product_ids)
            values(%s,%s,%s,%s,%s,%s)''', [
                survey_request['name'], 
                survey_request['email_id'], 
                survey_request['phone_number'], 
                '999999', 
                survey_request['city'],
                survey_request['product_ids']
            ])
        return "survey added successfully"
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)

def SurveyToExcel():
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute(f'''select s.survey_id, s.name, s.email_id, s.phone_number,s.city, p.product_name from
            (select survey_id,name,email_id, phone_number, city, unnest(string_to_array(survey.product_ids, ',')) 
            as product_id from survey) s inner join product p on s.product_id::int = p.product_id''')
        data = cursor.fetchall()
        return ExportDataToExcel(data) # returns an excel file
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)
