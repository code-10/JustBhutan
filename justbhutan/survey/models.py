from django.db import models
from django.http import JsonResponse
from django.db import connections
from django.db.utils import OperationalError
from justbhutan.utility.response import convertListToJson
import xlsxwriter
# from justbhutan.utility.excel import ExportDataToExcel

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

def SurveyToExcel():
    db_connection = connections['default']
    try:
        cursor = db_connection.cursor()
        cursor.execute('''select * from survey''')
        data = cursor.fetchall()
        print(data)

        workbook = xlsxwriter.Workbook('survey.xlsx')
        worksheet = workbook.add_worksheet()
        
        header_data = ("ID", "Name", "Email ID", "Phone Number", "Pincode", "City ID")

        header_format = workbook.add_format({'bold': True,
                                     'bottom': 2,
                                     'bg_color': '#57C377'})

        data.insert(0,header_data)

        # for col_num, data in enumerate(header_data):
        #     worksheet.write(header_format)

        for row, line in enumerate(data):
            for col, cell in enumerate(line):
                worksheet.write(row, col, cell)

        workbook.close()

        return "survey exported successfully"
    except OperationalError as e:
        JsonResponse("There is something wrong with the database connection", e)
