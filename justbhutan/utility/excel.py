from http.client import HTTPResponse
from pymysql import *
import xlwt
import pandas.io.sql as sql
import os
from xlutils.copy import copy
from xlrd import open_workbook

# def ExportDataToExcel(data):
#     response = HTTPResponse(mimetype='application/ms-excel')
#     response['Content-Disposition'] = 'attachment; filename=elagu.xls'
#     wb = xlwt.Workbook(encoding='utf-8')
#     ws = wb.add_sheet("surveys")

#     row_num = 0

#     columns = [
#         (u"ID", 6000),
#         (u"t_stamp", 8000),
#     ]

#     font_style = xlwt.XFStyle()
#     font_style.font.bold = True

#     for col_num in xrange(len(columns)):
#         ws.write(row_num, col_num, columns[col_num][0], font_style)
#         ws.col(col_num).width = columns[col_num][1]

#     font_style = xlwt.XFStyle()
#     font_style.alignment.wrap = 1

#     for obj in data:
#         row_num += 1
#         row = [
#             row_num,
#             obj['todo_job'],        
#             obj['creation_date'].strftime("%A %d. %B %Y"),
#         ]
#         for col_num in xrange(len(row)):
#             ws.write(row_num, col_num, row[col_num], font_style)

#     wb.save(response)
#     return response
