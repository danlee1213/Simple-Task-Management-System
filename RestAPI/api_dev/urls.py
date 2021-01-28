from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewset

router = DefaultRouter()
router.register('task', TaskViewset, basename='task')

urlpatterns = [
    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
]
