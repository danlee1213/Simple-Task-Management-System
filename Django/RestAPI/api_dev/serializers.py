from rest_framework import serializers 
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__' #Get all data from models
 

 