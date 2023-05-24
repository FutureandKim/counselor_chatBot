$('#btn').click(function () {
send();
});
$('#form').on('submit', function(e){
   e.preventDefault();
   send();
});
function send(){
    $('#chat').append('<div class="userBubble"><span>'+$('#message-input').val()+'<span></div>');
    $("#chat").scrollTop($("#chat")[0].scrollHeight);
    console.log("serial"+$('form').serialize())
    $.ajax({
        url:  'http://127.0.0.1:8000/mainPage.html', //챗봇 api url
        type: 'post',
        dataType: 'json',
        data: $('form').serialize(),
        success: function(data) {
            const botBubble = document.createElement('div');
            botBubble.classList.add('bot');
            botBubble.innerHTML = '<li><div class="icon"></div></li><li><div class="botBubble"><p>' + data.response + '</p></div></li>';
            chat.appendChild(botBubble);
            $("#chat").scrollTop($("#chat")[0].scrollHeight);
        }
    });
    $('#message-input').val('');
}