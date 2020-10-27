from rest_framework import routers
from .api import TruckViewSet


router = routers.DefaultRouter()
router.register('api/truck', TruckViewSet, 'truck')

urlpatterns = router.urls
