from rest_framework import serializers
from trucks.models import Truck


# Trucks Serializer
class TruckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Truck
        fields = '__all__'