/* 사용자 변수 생성을 위한 함수 */
function User(Name, Number) {
    this.Name = Name;
    this.Number = Number;
}

/* 사용자 변수 */
var user0 = new User('여사친', '010-1XXX-1XXX');
var user1 = new User('전썸녀', '010-2XXX-2XXX');
var user2 = new User('전여친', '010-3XXX-3XXX');
var user3 = new User('전전썸녀', '010-4XXX-4XXX');
var user4 = new User('전전여친', '010-5XXX-5XXX');
var user5 = new User('첫사랑', '010-6XXX-6XXX');

/* 영역 변수 */
var header = document.getElementById('header');
var numbers = document.getElementById('numbers');
var calling = document.getElementById('calling');
var userBox = document.getElementsByClassName('userBox');

/* 버튼 변수 */
var callBtn = document.getElementsByClassName('callBtn');
var endBtn = document.getElementById('endBtn');

/* 소리 변수 */
var callSound = new Audio('./static/sound/call-sound.mp3');

/* 통화 버튼 함수 */
function start_call(x) {
    callSound.load();
    callSound.play();
    window.setTimeout(function() { // 클릭 2초 후에 이벤트 발생
        header.innerHTML = '연결 중..';
        numbers.style.display = 'none';
        calling.style.display = 'block';
        userBox[0].innerHTML = x.Name;
        userBox[1].innerHTML = x.Number;
    }, 2000);
}

/* 종료 버튼 함수 */
function end_call() {
    callSound.pause();
    window.setTimeout(function() { // 클릭 0.5초 후에 이벤트 발생
        header.innerHTML = '연락처';
        calling.style.display = 'none';
        numbers.style.display = 'block';
    }, 500);
}

/* 버튼 클릭시 함수 이벤트 발생 */
callBtn[0].addEventListener('click', function() {start_call(user0)});
callBtn[1].addEventListener('click', function() {start_call(user1)});
callBtn[2].addEventListener('click', function() {start_call(user2)});
callBtn[3].addEventListener('click', function() {start_call(user3)});
callBtn[4].addEventListener('click', function() {start_call(user4)});
callBtn[5].addEventListener('click', function() {start_call(user5)});
endBtn.addEventListener('click', function() {end_call()});