//functions
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names);
var numbers = [10, 20, 30, 40];
numbers.push(2);
console.log(numbers);
// mixed array
var mixed = ['ken', 4, 'alex', 10, 10.5];
mixed.push('john');
mixed.push(8);
mixed[0] = 3;
console.log(mixed);
console.log(mixed[0]);
//objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.name = 'Biden';
ninja.name = 'Ninja';
ninja.belt = 'white';
ninja.age = 40;
ninja = {
    name: 'yoshi',
    belt: 'red',
    age: 50
};
console.log(ninja);
// explitcit types
var character;
var age;
var isLoggedIn;
character = "Thanh Le";
age = 35;
isLoggedIn = true;
// arrays
var ninjass = [];
ninjass.push('shaun');
ninjass.push('ninja');
console.log(ninjass);
// union types
var mixedd = [];
mixedd.push('hello');
mixedd.push(10);
mixedd.push(false);
console.log(mixedd);
var uid;
uid = 123;
uid = "hello";
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
console.log(ninjaOne);
var ninjaTwo;
ninjaTwo = { name: 'Jose', age: 10, beltColor: 'red' };
console.log(ninjaTwo);
var anytype = 25;
anytype = true;
console.log(anytype);
anytype = 20;
console.log(anytype);
anytype = { name: 'Maxi', age: 20 };
console.log(anytype);
var mixedAny = [];
mixedAny.push(105);
mixedAny.push("Nany");
mixedAny.push(false);
console.log(mixedAny);
