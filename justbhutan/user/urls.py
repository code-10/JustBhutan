from django.urls import path
from . import views

urlpatterns = [
    path('register/',views.UserRegistration),
    path('login/', views.UserLogin)
]