from django.urls import path
from . import views

urlpatterns = [
    path('',views.Survey),
    path('to_excel',views.SurveyToExcel)
]