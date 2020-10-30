from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
# from django.contrib.auth.models import User
from .models import EmailUser

from .serializers import UserSerializer, RegisterSerializer, LoginSerializer
from .utils import Util


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        user_data = serializer.data

        user_email = EmailUser.objects.get(email=user_data['email'])
        # user_name = User.objects.get(username=user_data['username'])


        # email_body = 'Hi ' + user_name.username + ', thanks for registering'
        email_body = 'Hi, thanks for registering'

        data = {
            'email_body': email_body,
            'to_email': user_email.email,
            'email_subject': 'Hello there...'
        }

        Util.send_email(data)

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })




# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
