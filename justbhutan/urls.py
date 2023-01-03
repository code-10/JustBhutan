"""justbhutan URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.shortcuts import render

def render_react(request):
    print("lol")
    return render(request, "index.html")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/category/', include('justbhutan.category.urls')),
    path('api/sub_category/', include('justbhutan.subcategory.urls')),
    path('api/product/', include('justbhutan.product.urls')),
    path('api/city/', include('justbhutan.city.urls')),
    path('api/survey/', include('justbhutan.survey.urls')),
    path('api/sku/', include('justbhutan.sku.urls')),
    path('api/user/', include('justbhutan.user.urls')),
    path("", render_react),
    # re_path(r"^(?:.*)/?$", render_react)
]
