from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from . import models

@csrf_exempt
def UserRegistration(request):
    if request.method == 'POST':
        try:
            user_request = JSONParser().parse(request)
            result = models.UserRegistration(user_request)
            return JsonResponse(result,status=status.HTTP_200_OK,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while registering a user", e)

@csrf_exempt
def UserLogin(request):
    if request.method == 'POST':
        try:
            user_request = JSONParser().parse(request)
            result = models.UserLogin(user_request)
            return JsonResponse(result,status=status.HTTP_200_OK,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while logging in a user", e)