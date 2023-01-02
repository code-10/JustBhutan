from http.client import HTTPResponse
from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
import xlsxwriter
try:
    from StringIO import BytesIO
except ImportError:
    from io import BytesIO
# from justbhutan.utility.excel import ExportDataToExcel

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
        cursor.execute('''select product_ids from survey''')
        data = cursor.fetchall()

        product_ids = tuple(map(int, data[0][0].split(',')))

        cursor.execute('''select product.product_name, survey.name, 
        survey.email_id, survey.phone_number, 
        city.city_name from survey 
        inner join city on city.city_id = survey.city_id 
        inner join product on product.product_id in %s''',[product_ids])
        data = cursor.fetchall()

        # print(data)

        # output = BytesIO()

        # workbook = xlsxwriter.Workbook(output)
        # worksheet = workbook.add_worksheet()
        
        # header_data = ("ID", "Name", "Email ID", "Phone Number", "Pincode", "City ID")

        # data.insert(0,header_data)

        # for row, line in enumerate(data):
        #     for col, cell in enumerate(line):
        #         worksheet.write(row, col, cell)

        # workbook.close()

        # output.seek(0)
        # response = HTTPResponse(output.read(), content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        # response['Content-Disposition'] = "attachment; filename=survey.xlsx"

        # return response
        return ""
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)
