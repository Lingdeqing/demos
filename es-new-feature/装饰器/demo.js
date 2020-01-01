function isAnimal(target){
    target.isAnimal = true;
    target.prototype.isAnimal = true;
    return target;
}

function bind(fn, context){
    if (fn.bind) {
        return fn.bind(context);
      } else {
        return function __autobind__() {
          return fn.apply(context, arguments);
        };
      }
}
function autoBind(target, key, {configurable, enumerable, value: method}){
    return {
        configurable,
        enumerable,
        get(){
            const value = function(...args){
                console.log('a: ', this.a);
                return method.apply(this, args)
            }
            // 在类自己的原型上面的函数，如果是原型链上的就不管了，不赞成继承
            if(this === target){
                return value;
            }
    
            return bind(value, this);
        }
    };
}


@isAnimal
class Dog{
    constructor(){
        this.a = 1;
        this.b = 2;
    }
    say(){
        console.log('wangwang')
    }

    @autoBind
    shit(){
        console.log('b: ', this.b);
    }
}
const dog = new Dog();
console.log(Dog.isAnimal);
console.log(dog.isAnimal);
dog.shit();
const shit = dog.shit;
shit();

