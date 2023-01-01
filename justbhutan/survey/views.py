from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from . import models

@csrf_exempt
def AddSurvey(request):
    if request.method == 'POST':
        try:
            survey_request = JSONParser().parse(request)
            result = models.AddSurvey(survey_request)
            return JsonResponse(result,status=status.HTTP_200_OK,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while adding a survey", e)