from django.shortcuts import render, redirect
from

# Create your views here.
def main(request):
    #main 함수 실행시 login.html 열리도록 render
    return render(request, 'introPage/introPage.html')