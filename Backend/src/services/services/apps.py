from django.apps import AppConfig


class CoreConfig(AppConfig):
    name = 'src.services.services'
    verbose_name = 'Services'
    verbose_plural = 'Services'
    default_auto_config = 'django.db.models.BigAutoField'

    # def ready(self):
    #     import src.core.signals
