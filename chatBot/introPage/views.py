from django.shortcuts import render
# Create your views here.
def main(request):
    #main 함수 실행시 login.html 열리도록 render
    return render(request, 'introPage/introPage.html')