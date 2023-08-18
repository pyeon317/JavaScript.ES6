/* 
default export

*하나의 모듈에서 하나의 객체를 이름으로 내보낼 때 단일 객체 내보내기 export default문을 사용합니다.*

*Class나 함수를 내보낼떄는 세미콜론을 붙이지 않도록 권유됩니다.* 
*/


class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getInfo = () => {
        return `${this.name}, ${this.age}`;
    }
}

export default Person