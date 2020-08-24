from django.db import models

# Create your models here.


#database work
'''
class Products1(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=255)
    desc=models.TextField()

class ProductImages1(models.Model):
    id=models.AutoField(primary_key=True )
    product_id=models.ForeignKey(Products1,on_delete=models.CASCADE)
    image=models.FileField(max_length=255)
'''