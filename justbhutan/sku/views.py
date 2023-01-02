from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from . import models

@csrf_exempt
def Sku(request):
    if request.method == 'POST':
        try:
            sku_request = JSONParser().parse(request)
            result = models.AddSku(sku_request)
            return JsonResponse(result,status=status.HTTP_201_CREATED,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while adding an SKU", e)
