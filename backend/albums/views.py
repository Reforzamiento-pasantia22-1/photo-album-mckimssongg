from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class AlbumViewSet(ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

    def destroy(self, request, *args, **kwargs):
        album = self.get_object()
        album.delete()

        return Response({"message": "El album fue eliminado"}, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        album = self.get_object()
        album_data = request.data
        album_serializer = AlbumSerializer(
            instance=album, data=album_data)
        if album_serializer.is_valid():
            album_serializer.save()
            return Response(album_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(album_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer_class.data)


class ImageViewSet(ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def destroy(self, request, *args, **kwargs):
        image = self.get_object()
        image.delete()

        return Response({"message": "La imagen fue eliminada"}, status=status.HTTP_200_OK)

    def update(self, request, *args, **kwargs):
        image = self.get_object()
        image_data = request.data
        image_serializer = ImageSerializer(
            instance=image, data=image_data)
        if image_serializer.is_valid():
            image_serializer.save()
            return Response(image_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(image_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer_class.data)
