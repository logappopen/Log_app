from trucks.models import Truck
from rest_framework import viewsets, permissions
from .serializers import TruckSerializer


# Lead Viewset
class TruckViewSet(viewsets.ModelViewSet):
    queryset = Truck.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TruckSerializer