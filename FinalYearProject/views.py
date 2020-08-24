from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
#database work
#from FinalYearProject.models import Products1, ProductImages1


def home(request):
    return render(request, 'index.html')

def howitworks(request):
     return render(request, 'howitworks.html')

def ourTeam(request):
    return render(request, 'ourTeam.html')

def contact(request):
     return render(request, 'contact.html')

def demo(request):
    return render(request, 'demo.html')

def partners(request):
     return render(request, 'partners.html')

def technology(request):
    return render(request, 'technology.html')

def training(request):
     return render(request, 'training.html')

def whyus(request):
     return render(request, 'whyus.html')

def signin(request):
    return render(request, 'signin.html')


#database work
'''
def multipleupload_save(request):
    name=request.POST.get("name")
    desc=request.POST.get("desc")
    images=request.FILES.getlist("file[]")
    print(images)
    product=Products1(name=name,desc=desc)
    product.save()

    for img in images:
        fs=FileSystemStorage()
        file_path=fs.save(img.name,img)

        pimage=ProductImages1(product_id=product,image=file_path)
        pimage.save()
    return HttpResponse("File Uploaded")
    '''