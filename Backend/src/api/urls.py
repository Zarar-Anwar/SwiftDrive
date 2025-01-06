from django.urls import path, include

from .views import ContactFormView


urlpatterns = [
    path('contact-us/', ContactFormView.as_view(), name='contact-form'),
]


urlpatterns += [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
]