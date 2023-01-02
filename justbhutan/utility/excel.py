from django.http.response import HttpResponse
from pymysql import *
import xlsxwriter
try:
    from StringIO import BytesIO
except ImportError:
    from io import BytesIO

def ExportDataToExcel(data):
    output = BytesIO()

    workbook = xlsxwriter.Workbook(output)
    worksheet = workbook.add_worksheet()
    
    header_data = ("ID", "Name", "Email ID", "Phone Number", "City", "Product Name")

    data.insert(0,header_data) #Headers

    for row, line in enumerate(data):
        for col, cell in enumerate(line):
            worksheet.write(row, col, cell)

    workbook.close()

    output.seek(0)

    response = HttpResponse(output.read(), content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    response['Content-Disposition'] = "attachment; filename=survey.xlsx"

    output.close()

    return response