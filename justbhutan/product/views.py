from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from . import models

@csrf_exempt
def Product(request):
    if request.method == 'GET':
        try:
            result = models.GetAllProducts()
            return JsonResponse(result,status=status.HTTP_200_OK,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while fetching products", e)
    elif request.method == 'POST':
        try:
            product_request = JSONParser().parse(request)
            result = models.AddProduct(product_request)
            return JsonResponse(result,status=status.HTTP_201_CREATED,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while adding a product", e)