from django.apps import AppConfig


class CourseConfig(AppConfig):
    name = 'src.course'
    verbose_name = 'Course'
    verbose_plural = 'Course'
    default_auto_config = 'django.db.models.BigAutoField'

    # def ready(self):
    #     import src.core.signals
