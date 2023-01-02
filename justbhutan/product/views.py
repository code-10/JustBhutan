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

@csrf_exempt
def ProductsOfSubcategory(request):
    if request.method == 'GET':
        try:
            data = models.ProductsOfSubcategory()

            products = {}
            sub_category = {}
            for res in data:
                sub_category_id = res[0]
                product_id = res[2]
                
                product_details = {}
                product_details['product_id'] = res[2]
                product_details['product_name'] = res[3]
                
                sub_category_id = res[0]
                sub_category_name = res[1]
                
                sub_category[sub_category_id] = {'sub_category_id':sub_category_id,'sub_category_name':sub_category_name}
                
                if(sub_category_id in products):
                    products[sub_category_id].append(product_details)
                else:
                    products[sub_category_id] = [product_details]
                    

            result = []
            for sub_category_id,sub_category_details in sub_category.items():
                result.append({
                        **sub_category[sub_category_id],
                        'products': products[sub_category_id]
                    })

            return JsonResponse(result,status=status.HTTP_200_OK,safe=False)
        except Exception as e:
            JsonResponse("Something went wrong while fetching products of subcategory <id>", e)