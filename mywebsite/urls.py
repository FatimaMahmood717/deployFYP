"""mywebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from FinalYearProject import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path ('', views.home, name='index'),
    path ('howitworks', views.howitworks, name='howitworks'),
    path ('ourTeam', views.ourTeam, name='ourTeam'),
    path ('contact', views.contact, name='contact'),
    path('demo', views.demo, name='demo'),
    path ('whyus', views.whyus, name='whyus'),
    path ('training', views.training, name='training'),
    path ('technology', views.technology, name='technology'),
    path('partners', views.partners, name='partners'),
    path('signin', views.signin, name='signin'),
   # path('multipleupload_save', views.multipleupload_save, name='multipleupload_save'),

]