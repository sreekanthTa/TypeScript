// What Are Decorators  @name()?
// Metaprogramming Code that interacts with other Code and change other code

// Two Kinds of Decorators:

// 1. ECMAScript Decorators: From Javascript, we can use without TypeScript

// 2. Experimental Decorators: From Typescript, Only supported with TypeScript


// Type of Decorators: It should  be used in the class
// 1.Class Decorators
// 2.Method Decoratros
// 3.Field Decoratros
// 4.Getter Decoratros
// 5.Setter Decoratros

// target: to which one we attached
// ctx: gives more information
function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('logger decorator')
    console.log(target)
    console.log(ctx)

    return class extends target {
        constructor(...args: any[]) {
            super(...args)
            console.log("class decorator")
            console.log(this)
        }
    }
}

function autobind(target:(...args:any[])=>any, ctx: ClassMethodDecoratorContext){
  console.log(target)
  console.log(ctx)

  ctx.addInitializer(function(this:any){
    this[ctx.name] = this[ctx.name].bind(this)
  });

  return function(){
    target()
  }
}

function fieldLogger(target:undefined, ctx:ClassFieldDecoratorContext){
  console.log(target);
  console.log(ctx);
}


@logger
class Person {

    @fieldLogger
    name = 'Max'

    @autobind
    greet() {
        console.log("Hi, I am" + this.name)
    }

}

const one = new Person()





