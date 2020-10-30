from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import EmailUser
from django.contrib.auth import authenticate



# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailUser
        fields = ('id', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailUser
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = EmailUser.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")