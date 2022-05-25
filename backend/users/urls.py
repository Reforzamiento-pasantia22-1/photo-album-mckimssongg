from django.urls import path
from . import views
from django.db import router
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', views.UsersViewSet)
urlpatterns = router.urls


urlpatterns += [
    path('userlist', views.UsersListViewSet.as_view(
        {'get': 'list'}),
        name='users'),
    path('login', views.LoginView.as_view(), name='login'),
    path('logout', views.LogoutView.as_view(), name='logout'),
]
