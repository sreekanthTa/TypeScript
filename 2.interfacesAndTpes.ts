//This is a typescript feature. it allows to define a type of an object. it is essentially
// contract implmented by classes

interface Autehticatable{
    email: string;
    password: string;
    login:()=>void
} 

// As an Object
let authUser: Autehticatable;

authUser = {
    email:"test@example.com",
    password:"abc",
    login:()=>{

    }
}

//As a Contract
class User implements Autehticatable{
constructor(public email: string, public password: string){
   this.email;
   this.password
}
login: () => {
    console.log("Login Functionality")
}
}


// Why would we use interface we can use TYPE of object right ?
// Yes, we can use TYPE OR INTERFACE. Both works fine... there are slight challanges

//1. declaration merging, TYPE will not allow merging...
//interface one{email:string}
//interface one{password: string}
//=> Merged into interface one {
//  email:string; 
//  password:string
//} 


//2.WE CAN EXTEND interfaces from other interfaces, interface one extends interfaceOne, interfaceTwo{}

//3. Using Interfaces To Define Function Types
// A lesser known but nonetheless interesting feature of TypeScript interfaces is that you can also use them to define function types.

// For example, you might want to define the type of a sum function that takes two numbers as input and returns their sum.

// You could write this code:

// type SumFn = (a: number, b: number) => number; // function type
 
// let sum: SumFn; // making sure sum can only store values of that function type
 
// sum = (a, b) => a + b; // assigning a value that adheres to that function type
// Alternatively, you can also define the SumFn type via an interface:

// interface SumFn {
//   (a: number, b: number): number;
// }
// It's up to you which alternative you prefer.

// Typically, you'll encounter the first version (type SumFn) more often but it's worth knowing about the alternative, too.



















