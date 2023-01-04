from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from . import models

@csrf_exempt
def City(request):
    if request.method == 'GET':
        try:
            print(request.credentails)
            print(request.message)
            result = models.GetAllCities()
            return JsonResponse(result,status=status.HTTP_200_OK,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while fetching cities", e)
            