/* 영역 변수 */
var nBox = document.getElementById('name-box');
var dBox = document.getElementById('display-box');

/* 버튼 변수 */
var input = document.getElementsByTagName('input');
var btn1 = input[1];
var btn2 = input[2];

/* START 버튼 함수 */
function Start() {
    if (nBox.value == '') {
        alert('닉네임을 입력하세요.');
    } else {
        btnPush();
    }
}

/* RENAME 버튼 함수 */
function Rename() {
    dBox.innerHTML = '';
    dBox.style.display = 'none';
    nBox.value = '';
    nBox.style.display = 'block';
    btn1.value = 'START'
    btn2.style.display = 'none';
}

/* 버튼 함수 */
var i = 0;
function btnPush() {
    // START 버튼
    if (btn1.value == 'START') {
        nBox.style.display = 'none';
        dBox.style.display = 'block';
        btn1.value = 'PLAY';
    }
    // PLAY 버튼
    else if (btn1.value == 'PLAY') {
        var nickname = nBox.value;
        if (i == nickname.length-1) {
            dBox.innerHTML += nickname[i];
            btn1.value = 'REPLAY';
            btn2.style.display = 'block';
            i = 0;
        } else {
            dBox.innerHTML += nickname[i];
            i++;
        }
    }
    // REPLAY 버튼
    else {
        btn1.value = 'PLAY';
        btn2.style.display = 'none';
        dBox.innerHTML = '';
        i = 0;
    }
}