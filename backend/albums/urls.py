from django.urls import path
from . import views
from django.db import router
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'albums', views.AlbumViewSet)
router.register(r'image', views.ImageViewSet)
router.register(r'searchImage', views.SearchImageView, basename='searchImage')
urlpatterns = router.urls
