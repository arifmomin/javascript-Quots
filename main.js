// /**
//  * todo : const variable check 
//  */

// const a = 5, b = 7, c = a + b;

// console.log(c);

// const x = {
//     myName: "Arif Momin",
//     myAge: 24,
//     eyeColor: " black"
// }
// /**
//  * todo : create an Object and then add 4 properties 
//  */
// const person ={};
// person.firstName = "Arif",
// person.lastName = "Momin",
// person.age = 23,
// person.eyeColor = "Black";
// console.log(person);
// /**
//  * todo : create a new Object and then add 4 properties 
//  */
// const arif = new Object();
// arif.realName = "Arif Momin",
// arif.address = "Daulatpur",
// arif.age = 23;
// console.log(arif);
// {
//     /**
//  * todo : create a Object with 4 properties 
//  */
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(person);
// }
// {
//     /**
//  * todo : create a Object with 4 properties with change age and delete age 
//  */
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// const x = person;
// x.age = 20;
// delete x.age;
// console.log(person);

// }
// {
//     /**
//  * todo: create object with nasted object 
//  */
// const person = {
//     Name: "Arif momin",
//     age: 23,
//     address:{
//         street: "Daulatpur",
//         city: "Comilla",
//     }
// }
// console.log(person);

// }
// {
//     /**
//  * todo: create object with nasted object and function
//  */
// const person = {
//     firstName: "Arif",
//     lastName: "Shakil",
//     age: 23,
//     name: function (){
//         return "my"+" "+"name"+" "+"is"+" "+this.firstName+" "+"Momin"+" "+ this.lastName;
//     }
// }
// console.log(person.name());

// }

// const red = document.getElementsByClassName ("red");
// const Blue = document.getElementsByClassName ("Blue");
// const Green = document.getElementsByClassName ("Green");
// const  text = document.getElementsByClassName ("text");

// const x = {
//     myName: 'Arif Momin',
//     LastName: 'Shakil',
//     Age: 24,
//     Religion: 'Islam',
// }
// console.log(x.myName);
// const d = 'hello';
// const myString = d.at(3);
// console.log(charAt(myString.length-2));

// const xx = 'amarNadfsgmeArsfiARIFMOMINfsdfMomin, TomarNameKi';
// const ssss = xx.slice(-31 , -22);
// console.log(ssss);

// const z = 'Arif Momin'
// console.log(z.toUpperCase());

// const car = [];
// car [0] = 'Volvo';
// car[1] = 'Fastest';
// car [2] = 'Car';
// car [3] = 'in';
// car [4] = 'the';
// car [5] ='World';
// console.log(car.length);

// const Fruits = ['Apple', 'Banana', 'Mango', 'painaple'];
// const FruitsLength = Fruits.length;

// for(let i = 0; i < FruitsLength; i++ ){  
    //     console.log(heading.innerHTML += ' ' + Fruits[i] +"<br>");
    
    // }
    
//     const heading = document.querySelector('.heading')
// let star = heading.innerHTML;
// for(let i = 0; i < 10; i++){
//     heading.innerHTML+='*'.repeat(i) +'<br>';   
// }
// const heading = document.querySelector('.heading')
// const Fruits = ['Apple', 'Banana', 'Kewei', 'Pinaple', 'Jackfruit'];
// Fruits.push('Lemon', 'Watermallon', {firstNmae: 'Arif', LastName: 'Momin', Car: {CarName: 'Rolls Royes', Color: 'Black', Carowner: "Arif Momin"}});
// console.log(Fruits[7].Car.Carowner);
// console.log(Fruits.slice(7));

// const Car ={CarName: 'Rols Royes', CarModel: 'Rolls-Royce Phantom', CarColor: ['Red', 'Blue', 'Black', 'Green']}
// console.log(Car.CarColor);
// const Fruits = ['Apple', 'Banana', 'Kewei', 'Pinaple', 'Jackfruit'];
// Fruits[3] = 'aslf'
// console.log(Fruits);
// const fruitsc = ["Banana", "Orange", "Apple",'amr' ,'name','arif'];
// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// console.log(fruits.splice(1, 2));


// const fruits = ['Apple', 'Banana', 'Pinaple','Orange',{FirstName: 'Arif', LastName: 'Momin'},'Mango','Jackfruit','guava','jam','gab'];
// const car = ['Bus', 'car','Bike', 'Texi', 'Bmw', 'Rols Royes']
// fruits.slice(2);
// console.log(fruits.concat(car));
// console.log(fruits);
// const all = fruits.concat(car);

// console.log(all);
// const car = ['Bus', 'car','Bike', 'Texi', 'Bmw', 'Rols Royes']
// const fruits = ['Apple', 'Banana', 'Pinaple','Orange',{FirstName: 'Arif', LastName: 'Momin'},'Mango','Jackfruit','guava','jam','gab'];
// console.log(fruits.shift());
// const x = (car.splice(2, 3) );
// console.log(x);

// const namee = ['Amr', 'bal', 'Arif', 'hup', 'Shakil']
// console.log(namee.splice(1, 0, "Name"));
// console.log(namee.splice(4, 0, "Momin"));
// console.log(namee.splice(2, 1));
// console.log(namee.splice(4, 1));
// console.log(namee.splice(5, 0 , 'Tomar','Name', 'ki'));
// console.log(namee);
// const namee = ['Amr', 'bal', 'Arif', 'hup', 'Shakil']
// const x = (namee.at(2));
// console.log(x);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());
// console.log(fruits.reverse());
// const fruits = ["Apple", "Orange", "banana", "Mango"];

// function myFunction (value, index){
//     console.log(value);
//     return  value + 5  
// }
// const sss = fruits.map(myFunction);

// console.log(sss);
// console.log(fruits);

/**
 * todo: alemelo array k alphabatically ba number wise sajano
 */
// const roll = [1,4,2,5,7,8,87,67];

// console.log(roll.sort((a,b) =>{return a - b }));
/**
 * todo: lipear ber kora 
 */
// const myFunction = ((year) =>{
//     if(year % 400 === 0 || year % 100 !== 0 && year % 4 === 0){
//         console.log(year ,'This year is lipear');
        
//     }else{
//         console.log(year ,'This year is not lipear');

//     }
// })
// myFunction(2028);
/**
 * todo: text theke vowel ber kora
 */
// const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I','O','U'];
// const myFunction = ((value) =>{
//     let numberr = 0;
//     const sentence = Array.from(value);
//     sentence.forEach((item) =>{
//         if(vowel.includes(item)){
//             numberr++
//         }

//     });
//     return numberr
// })
// console.log(myFunction('Amar sunar bangla'));


