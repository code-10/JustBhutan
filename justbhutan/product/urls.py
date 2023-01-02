from django.urls import path
from . import views

urlpatterns = [
    path('',views.Product),
    path('sub_category/<int:sub_category_id>/', views.ProductsOfSubcategory),
]