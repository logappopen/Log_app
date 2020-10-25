from django.db import models


class Trucks(models.Model):
    car = models.CharField(max_length=100)
    semitrailer = models.CharField(max_length=100)
    capacity = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
