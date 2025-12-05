
//q1



// let user={
//     name:'dev',
//     email: 'A@amail.com',

//   login:function(){
//     console.log("logged in");
//   },
// }

// user.login();





// now making it with class for 5 users


// class User{

//     constructor(name,email){

// this.name=name;
// this.email=email;

//     }


//     login(){
//         console.log("logged in");
//     }
// }


// let u1=new User("dev","ad@.com");
// let u2=new User("devansh","ad@.com")
// let u3=new User("ved","ad@.com")
// let u4=new User("vedansh","ad@.com")
// let u5=new User("aarav","ad@.com")





// q2


// let product={

//     name:'shoes',
//     price:2000,
//     discountedPrice:function(){

//      return this.price-200;
//     }

// };

// console.log(product.discountedPrice());




// SEction 2  classes and Objects


// q1


// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive(){
//         return(this.brand+'-'+this.speed);
//     }
// };


// let c1=new Car("a",20);
// console.log(c1.drive());
// let c2=new Car('b',40);
// console.log(c2.drive());



// section 3  constructor and  this keyword

// q1

// class Student {

//     constructor(name, roll_number) {
//         this.name = name;
//         this.roll_number = roll_number;
//     }
//     introduce() {
//         console.log(this.name + " " + this.roll_number);
//     }

// }

// let s1=new Student("dev",21);






// q2

// let obj = {

//     sayname: function () {
//         console.log(this);
//     },

//     sayarrow: () => {
//         console.log(this);
//     }
// }

// obj.sayname();                // object milega
// obj.sayarrow();              // isme window milega kyunki arrow function apne parent se value leta hai iska parent object hai jo ki global space me bna hai isliye window ans aa rha hai 









// section 4 constructor functions and prototypes


// q1

// function User(){
//     this.name='dev';
//     // this.login=function(){
//     //     console.log('logged');
//     // }
// }

// User.prototype.login=function(){
//     console.log("logged in");
// }

// let u1=new User();

