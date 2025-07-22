//INTERSECTIONS
type userDetails = {
    name: string
    age: number
}

type userAddress = {
    state:string
    city:string
}

type totalUserInfo = userDetails & userAddress

// Note: we can do with interface also no issues in that, we can use extends to like interface totalUserInfo extends userDetails, userAddress{}

//TYPE GUARDS
type FileSource = {path: string};
const fileSource: FileSource = {
    path:"/somePath/to/file.csv"
}

type DBSource = {connectionUrl: string}
const dbSource: DBSource = {
    connectionUrl:'some-connection-url'
}

type Source = FileSource | DBSource

function loadData(source: Source){ // it is similar to unknow but no need to check type=="object" since we alredy defined type as SOURCE
    if('path' in source){
    //source.path
        return;
    }
    //source.connectionUrl
}


//UNION DISCRIMINATOR => used to define properties in the types and use instead of depends on value
type FileSource_ = {type:"file",path: string};
 
type DBSource_ = {type:"db",connectionUrl: string}
 
type Source_ = FileSource_ | DBSource_

function loadData_(source: Source_){ // it is similar to unknow but no need to check type=="object" since we alredy defined type as SOURCE
    // if('path' in source){
    if(source.type=="file"){
    //source.path
        return;
    }
    //source.connectionUrl
}


//instanceof
class User_{
    constructor(public name:string){}
    join(){}
}

class Admin_{
    constructor(permissions: string[]){}
    join(){}
}

const user = new User_("Nax")
const admin = new Admin_(["ban", "store"])

type Entity_ = User_ | Admin_

function init(entity: Entity_){
    if(entity instanceof User){
      entity.join();
      return;
    }

    entity.join();

}


// PREDICATES => boolean returns type of file
type FileSource1= {type:"file",path: string};
 
type DBSource2 = {type:"db",connectionUrl: string}
 
type Source3 = FileSource_ | DBSource_

function isFile(source: Source3){
   return source.type == "file"
}

function loadData2(source: Source_){ // it is similar to unknow but no need to check type=="object" since we alredy defined type as SOURCE
    // if('path' in source){
    if(isFile(source)){
    //source.path
        return;
    }
    //source.connectionUrl
}


//FUNCTION OVERLOADS=>  pass diff types and return diff types
// function getLength(data: any[]):number;
// function getLength(data: string): string;
function getLength(data: string | any[]){
   if(typeof data == 'string'){
    return data.length
   }

   return data.length
}

const numOfWords = getLength("test")
const numOfElements = getLength(["one","two"])


//index
type DataSource = {
    [prop:string] : number | boolean
}


// const: AS CONSTANT : This simply tells do not it as a normal and specific readonly
let roles = ['admin', 'guest', 'editor'] as const;

// Record: 
let someObj:Record<string, number|boolean>; // Here key is string, value is number and boolean

//Satisfies:
// const dataEntries: Record<string, number> = {
//     entry1:0.51,
//     entry2:-1.23
// }

// dataEntries.entry3 // Record will allow

const dataEntries = {
    entry1:0.51,
    entry2:-1.23
} satisfies Record<string, number>;




// dataEntries.entry3 // Satisfies will check
