from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class UserManager(BaseUserManager):
    def _create_user(self, username, email,  password,  is_superuser, is_staff, **extra_fields):
        user = self.model(
            username=username,
            email=email,
            is_superuser=is_superuser,
            is_staff=is_staff,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email,  password=None, **extra_fields):
        return self._create_user(username, email,  password, False, False, **extra_fields)

    def create_superuser(self, username, email,  password=None, **extra_fields):
        return self._create_user(username, email,  password, True, True, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)

    email = models.EmailField('Correo Electrónico',
                              max_length=255,
                              unique=True,)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    objects = UserManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', ]

    def __str__(self):
        return f'{self.username}'
