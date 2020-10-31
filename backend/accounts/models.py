from django.contrib.auth.models import BaseUserManager, AbstractUser
from django.db import models
from django.contrib.auth import get_user_model


class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, username, email, password, **kwargs):
        """
        Create and save a User with the given email and password.
        """
        if username is None:
            raise TypeError('Users should have a username')
        if not email:
            raise ValueError('The email must be sent')
        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()
        return user


    def create_superuser(self, username, email, password, **kwargs):
        """
        Create and save a SuperUser with the given email and password.
        """
        if username is None:
            raise TypeError('Users should have a username')
        if password is None:
            raise TypeError('Password should not be none')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


class EmailUser(AbstractUser):
    username = models.CharField('login', max_length=255, unique=True, db_index=True, default=None)
    email = models.EmailField('email address', unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.email


EmailUser = get_user_model()