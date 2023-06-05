from django.shortcuts import render, redirect
from .models import User
# Create your views here.
def main(request):
    #main 함수 실행시 login.html 열리도록 render
    if request.method == 'GET':
        return render(request, 'joinPage/joinPage.html')

    elif request.method == 'POST':
        user_name = request.POST.get('name', '')
        user_birth = request.POST.get('birth', '')

        if(user_name or user_birth) == '':
            return redirect('joinPage/joinPage.html')
        else:
            user = User(
                user_name=user_name,
                user_birth=user_birth
            )
            user.save()
        return redirect('/')

# Create your views here.
