from django.db import models


class Truck(models.Model):
    car_manufacturer = models.CharField(max_length=100)
    semitrailer = models.CharField(max_length=100)
    capacity = models.CharField(max_length=100)
    registration_number = models.CharField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.car_manufacturer


class Car(models.Model):
    truck = models.ManyToManyField(Truck)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name