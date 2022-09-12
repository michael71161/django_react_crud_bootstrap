from django.http import JsonResponse
from django.shortcuts import render
from .models import Book
from rest_framework.response import Response
from rest_framework.decorators import api_view
 
# Create your views here.
def index(r):
    return JsonResponse({'test':"test"})
 
 
# desc ,price,prodName,createdTime, _id
@api_view(['GET','POST','DELETE','PUT'])
def books(request,id=-1):
    if request.method == 'GET':    #method get all
        if int(id) > -1: #get single product
            if int(id)> Book.objects.count(): return JsonResponse({"out of bounds array":"1111"})
            book= Book.objects.get(_id = id)
 
            return JsonResponse({
            "desc":book.desc,
            "author":book.author,
            "year":book.year
            },safe=False)
        else: # return all
            res=[] #create an empty list
            for bookObj in Book.objects.all(): #run on every row in the table...
                res.append({"desc":bookObj.desc,
                "author":bookObj.author,
                "year":bookObj.year,
               "id":bookObj._id
                }) #append row by to row to res list
            return JsonResponse(res,safe=False) #return array as json response
    if request.method == 'POST': #method post add new row
        
        desc =request.data['desc']
        Book.objects.create(desc=request.data['desc'] ,author=request.data['author'],year=request.data['year'])
        return JsonResponse({'POST':"test"})
    if request.method == 'DELETE': #method delete a row
        temp= Book.objects.get(_id = id)
        temp.delete()
        return JsonResponse({'DELETE': id})
    if request.method == 'PUT': #method delete a row
        temp=Book.objects.get(_id = id)
 
        
        temp.desc =request.data['desc']
        temp.author =request.data['author']
        temp.year =request.data['year']

        temp.save()
 
        return JsonResponse({'PUT': id})