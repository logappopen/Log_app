from rest_framework import serializers
from trucks.models import Trucks


# Trucks Serializer
class TrucksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trucks
        fields = '__all__'