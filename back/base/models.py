from django.db import models
from django.contrib.auth.models import User
 
 
class Book(models.Model):
    desc = models.CharField(max_length=50,null=True,blank=True)
    author = models.CharField(max_length=50,null=True,blank=True)
    year = models.DecimalField(max_digits=8,decimal_places=2)
    _id=models.AutoField(primary_key=True,editable=False)
    def __str__(self):
     	   return self.desc 