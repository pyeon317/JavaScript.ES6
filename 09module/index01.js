/* 
* 모듈 임포트

- 모듈은 JS ES6문법에서 미리 작성해 놓은 스크립트 파일이며, 모듈 안에는 변수, 함수, 클래스 등이 정의되어 있습니다.

- ES6부터는 주요기능들을 모듈로 구성하여 사용이 가능합니다.

- 모듈을 내보내는 방법은 named export방식과 default export방식 2개가 있습니다.
- 여러 값을 내보낼 때 named export방식
- 단일 값을 내보낼 때 default export방식
 */

export const name = "홍길동";
export const age = 20;

export const getInfo = () => {

    console.log(`이름${name}이고, ${age}`);
}

let sum = 0;
const add = (x) => {
    sum += x;
}

//export {sum, add, name, age, getInfo};
export {sum, add};