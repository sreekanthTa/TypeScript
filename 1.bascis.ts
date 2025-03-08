// Typescript Types: String, Number, Boolean
let userName: string;
userName = "Max"

let age = 10// Typescript inference
let ages:number = 100// no need if we assign initially. Typescript assignment

// Javascript has only implicit we can check by typeof userName
//Typescript has only explicit we can do by let userName: string. It can do explicity if we assign, let userName = "Max" as string; 
// This is called Typescript Inference

//Function parameters assignment
//b is of type number due to initial value
//a is of type number due to explicit value

function add(a: number, b=5 ){
  return a + b
}


//ANY TYPE : It will accept what ever type like string or number. Since it accepts all types. it is last option
let area: any = 34
area = "35"
area = true
area = {}
area = []

//UNION TYPE: It allow combination types. Better than Any
let age_u: string | number = 36

//ARRAY TYPES: string[], or number []
let names_at:string[]
names_at =  ["name", "name2"] 

let names_id: (string | number) [];
names_id = ["1",2]


//ALTERNATE WAY TO (string | number)[];
let names_id_: Array<string | number>
names_id_ = ["1", 2]

// TUPLE: define possible length and type of variables
let possibleResults: [number, number]
possibleResults = [1, -1]
// possibleResults = [5, 10, 12]// 


// OBJECT TYPES:
let user: {
    name: string;
    age: number | string;
    hobbies: string[],
    role:{
        description: string;
        id: number
    }
} = {
    name: 'Max',
    age: 38,
    hobbies:[],
    role:{
        description:"testDescription",
        id: 100
    }
};



//TRICKY: The 'Must Not Be Null' Type
let val: {} = 'some text'; // empty object allows any type other than "null or undefined"

//FLEXIBLE OBJECTS (Record): If we dont know the types prior 
let someObj = {
    name: 'Max',
    0:10
}

let data: Record<string | number, string | number>;
data = {
    'entry1' : 'testNumber',
     0:55
}

// ENUMS TYPES: Fixed Values
enum Role {
    Admin,
    Editor,
    Guest
}
// enum Role {
//     Admin = 'Admin',
//     Editor ='0',
//     Guest = 'Guest'
// }

let userRole_1: Role = 0;
let userRole_2: Role = Role.Admin;

// LITERAL TYPES: define specific types

let userRole_3: 'admin' | 'editor' | 'guest' = 'admin';
userRole_3 = 'editor'


let possibleResults_1 =[1 | -1, 5 | 6]
possibleResults_1 = [1, 5]


// TYPE ALIASES & CUSTOM TYPES: ALLOWS TO STOP REPEATED CODE:
type Role_1 =  'admin' | 'editor' | 'guest';
let userRole_4: Role_1 = 'admin';


let userRole_5: Role_1 = 'admin';


//VOID: function will not return, by default void will apply if we dont specify. dont use explicitly
function log(message: string): void{
    console.log(message)
}


//NEVER: specific that we function will not complete (since we throw error) and doesnt return
// Dont use since it will not return
function  logAndThrow(errorMessage: string){
    console.log(errorMessage)
    throw new Error(errorMessage)
}

// FUNCTION AS TYPES: FUnction type with parameters () => void or just Function 
 function performJob(cb:()=> void){  // cb:(m:string) => void
    cb()
 }

 //NULL & UNDEFINED = useful when we combined with union
 let a:null | string;
 a = "hello"

 let b: undefined | string;
 b = 'testHello'
 

//  const intputE = document.getElementById('user-name')

//  if(!intputE){
//     throw new Error('element not found')
//  }


// const intputE = document.getElementById('user-name')! 
// //Telling it will not yield null. it dangeours to use if we are not sure element is present or not


//optional chaining: it allows that if element only do next calculations
// const intputE = document.getElementById('user-name')
 
// console.log(intputE?.value)




// AS TYPE
const intputE = document.getElementById('user-name') as HTMLInputElement || null
 
console.log(intputE?.value)

//UNKNOW TYPE: unknow it is like any but not. any allows anything. unknow allows you to perform checks before running code+
function process(val:any){
    val.log()// works
}

function process_(val:unknown){
    if(typeof val =="object" && !!val && 'log' in val&& typeof val.log == 'function'){
        val.log()// works
    }
}


// OPTIONAL VALUES & TYPESCRIPT:
function generateError(msg?:string){
    throw new Error(msg)
}

generateError()


// NULLISH COALESCING: ??: checks null or undefined
let input = null;
const didProvideInput = input ?? false;

// note: || acheck