// type Datastore = {
//     name:string;
//     age:number
// }
 

// let store: Partial<Datastore> = {}
// store.name = "hello"
// store.age = 100


// type Datastore = {
//      [key:string] : string | number
// }
 

// let store:Datastore = {}
// store.name = "hello"
// store.age = 100
// store.isInstructor = true // Throws error since we have only defined paramenters which are static
 

// Generics:  It helps us reuse the same code for different types of input since the type itself is available as a parameter.
 
// 1. Generic Types:
type Datastore<T> = {
    [key:string] : T  //[Dynamic key] if we dont know the type prior, Pass Type as in placeholder T
}

let store:Datastore<string | number | boolean> = {}
store.name = "hello"
store.age = 100
store.isInstructor = true


let extraStore: Datastore<boolean> = {}
extraStore.isInstructor= true

//2. Generic Functions:
function merge<T>(a:T ,b:T){
   return [a,b]
}

const ids = merge<number>(1,2)
console.log("ids are", ids)

// 3.1 Multiple parameters:

function merge_<T, U>(a:T ,b:U){
   return [a,b]
}

const ids_ = merge_<number, string>(1,"2")
console.log("ids are", ids_)

// 3.2 Generics with Constratins

function mergeObj<T extends Object>(a:T,b:T) {
   return {...a,...b}
}

const mergedObj =  mergeObj<Object>({userName:'Max'}, {age:10})
console.log("mergedObj", mergeObj)