// 类型
function greeter(person: string):string{
    return 'hello, ' + person;
}

let user = 'Jane';
document.body.innerHTML = greeter(user);


// 接口
interface Person{
    firstName: string;
    lastName: string;
}
function greet(person: Person){
    return 'Hello, ' + person.firstName + ' '+ person.lastName;
}
let user2 = {firstName: 'Jane', lastName: 'User'};
greet(user2);


// 类
class Student{
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string){
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
}
let user3 = new Student('Jane', 'M', 'User');
greet(user3);