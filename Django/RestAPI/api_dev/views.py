from django.shortcuts import render
from django.shortcuts import get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer

# Create your views here.

#Configure as a Viewsets
class TaskViewset(viewsets.ViewSet):

    def list(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True) #Take all data from Task and put it on serializer
        return Response(serializer.data)
    
    #POST
    def create(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED) #Successful - CREATED
            #Not valid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) #Client Error - BAD REQUEST

    #GET
    def retrieve(self, request, pk=None):
        queryset = Task.objects.all()
        task = get_object_or_404(queryset, pk=pk)
        serializer = TaskSerializer(task) 
        return Response(serializer.data)

    #PUT
    def update(self, request, pk=None):
        task = Task.objects.get(pk=pk)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data) #Update 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #DELETE
    def destroy(self, request, pk=None):
        task = Task.objects.get(pk=pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) #Successful - NO CONTENT
   

