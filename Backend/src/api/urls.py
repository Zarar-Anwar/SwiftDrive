from django.urls import path

from .views import ContactFormView
from ..api.views import ProductListView

urlpatterns = [
    path('contact-us/', ContactFormView.as_view(), name='contact-form'),
]
