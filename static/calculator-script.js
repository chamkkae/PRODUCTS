/* 버튼 함수 */
function Push(key) {
    // 입력값 변수
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;

    if ((x == '') || (y == '')) { // 숫자가 입력되지 않으면
        alert('숫자를 모두 입력하세요.'); // 경고창 출력
    } else {
        if (key == 1) { // 더하기 함수
            var result = parseFloat(x) + parseFloat(y);
            console.log(x, '+', y, '=', result);
        } else if (key == 2) { // 빼기 함수
            var result = parseFloat(x) - parseFloat(y);
            console.log(x, '-', y, '=', result);
        } else if (key == 3) { // 곱하기 함수
            var result = parseFloat(x) * parseFloat(y);
            console.log(x, '×', y, '=', result);
        } else if (key == 4) { // 나누기 함수
            if (y == 0) {
                console.log('나누는 수는 0이 될 수 없습니다.');
            } else {
                var result = parseFloat(x) / parseFloat(y);
                console.log(x, '÷', y, '=', result);
            }
        } else { // 사칙연산 함수
            Push(1);
            Push(2);
            Push(3);
            Push(4);
        }
    }
}