from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .answer import chat_answer
# Create your views here.


@csrf_exempt
def main_page(request):
    if request.method == 'POST':
        input1 = request.POST['message-input']
        response = chat_answer(input1)
        output = dict()
        output['response'] = response
        return HttpResponse(json.dumps(output), status=200)
    else:
        return render(request, 'mainPage/mainPage.html')

'''
def main(request):
    if request.method == 'POST':
        input1 = request.POST['message-input']
        output = dict()
        output['response'] = "response"
        return HttpResponse(json.dumps(output), status=200)
    else:
        return render(request, 'mainPage/mainPage.html')
'''


