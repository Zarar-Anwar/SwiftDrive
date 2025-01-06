from django.contrib import admin

from .models import (
     ContactForm
)



@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'subject', 'message', 'email', 'phone')
    search_fields = ('fullname', 'email')
    list_filter = ('fullname', 'email')
