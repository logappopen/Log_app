from rest_framework import routers
from .api import TrucksViewSet


router = routers.DefaultRouter()
router.register('api/trucks', TrucksViewSet, 'trucks')

urlpatterns = router.urls
