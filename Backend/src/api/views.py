from rest_framework import generics
from rest_framework.renderers import JSONRenderer

from ..core.models import ContactForm
from .serializers import ContactFormSerializer


class ContactFormView(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
