from django.urls import path
from . import views
from django.db import router
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('searchImage', views.SearchImageView.as_view(), name='search')
]
router = DefaultRouter()
router.register(r'albums', views.AlbumViewSet)
router.register(r'image', views.ImageViewSet)
urlpatterns += router.urls
