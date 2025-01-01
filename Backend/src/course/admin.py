from django.contrib import admin
from .models import Test, Subject, MCQ, StudentProgress, StudentTest

# Inline for MCQs in Subject
class MCQInline(admin.TabularInline):
    model = MCQ
    extra = 1  

# Inline for Subjects in Test
class SubjectInline(admin.TabularInline):
    model = Subject
    extra = 1  

class TestAdmin(admin.ModelAdmin):
    inlines = [SubjectInline]
    list_display = ['name', 'description', 'icon', 'tag']  

class SubjectAdmin(admin.ModelAdmin):
    inlines = [MCQInline]
    list_display = ['name', 'test','icon']  

class StudentTestAdmin(admin.ModelAdmin):
    list_display = ['student', 'test', 'date_taken', 'score']
    list_filter = ['test']
    search_fields = ['student__username', 'test__name']

class StudentProgressAdmin(admin.ModelAdmin):
    list_display = ['student', 'subject', 'progress']
    list_filter = ['subject']
    search_fields = ['student__username', 'subject__name']

# Registering the models with the admin
admin.site.register(Test, TestAdmin)
admin.site.register(Subject, SubjectAdmin)
admin.site.register(MCQ)
admin.site.register(StudentProgress, StudentProgressAdmin)
admin.site.register(StudentTest, StudentTestAdmin)
