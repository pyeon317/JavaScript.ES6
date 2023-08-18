
let result = 0;

function add(x) {
    result += x;
}

function minus(x){
    result -= x;
}

//default 방식으로 객체 내보내기
//key방식 or 향상된 리터럴
export default { a : add, b : minus }