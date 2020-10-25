from trucks.models import Trucks
from rest_framework import viewsets, permissions
from .serializers import TrucksSerializer


# Lead Viewset
class TrucksViewSet(viewsets.ModelViewSet):
    queryset = Trucks.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrucksSerializer