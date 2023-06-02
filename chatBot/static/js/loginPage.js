const form = document.querySelector('form');
const btn = document.querySelector('button[type="submit"].continue');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  const nameInput = document.querySelector('input[name="name"]');
  const birthInput = document.querySelector('input[type="date"]');

  const name = nameInput.value;
  const birth = new Date(birthInput.value);


  if (!name || document.getElementsByName("birth")[0].value == "") {
    alert('입력하신 정보를 다시 확인해주세요');
    return;
  } /*이름이나 생년월일의 입력이 올바르지 않을때*/

  const isValid = confirm(`${name} (${birth.getFullYear()}년 ${birth.getMonth() + 1}월 ${birth.getDate()}일) 님이 맞으신가요?`);
  if (isValid) {
    // 예를 선택했을 때
    window.open('mainPage.html', '_blank');
  } else {
    // 아니오를 선택했을 때
    return;
  }
});

const start = document.querySelector('.register');
start.addEventListener('click', () => {
  window.open('joinPage.html', '_blank');
});
