function isAnimal(target){
    target.isAnimal = true;
    target.prototype.isAnimal = true;
    return target;
}


@isAnimal
class Dog{
    say(){
        console.log('wangwang')
    }
}
const dog = new Dog();
console.log(Dog.isAnimal);
console.log(dog.isAnimal);

