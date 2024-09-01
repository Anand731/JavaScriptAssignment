////without parameters and return type
// function greet(){
//     console.log("hello anand");

 ////with parameter and return type   
// }
// function sqr(x){
//     //console.log(x*x);
//     return x*x;
    
// }
////default parameter with return type
// function addition(x=4,y=7){

//     return x+y;
// }
// greet()

// let val=sqr(7)
// console.log(val);
// let val2=sqr(10)
// console.log(val2);

// let additions= addition()
// console.log(additions);
// let additionss= addition(5)
// console.log(additionss);

////function with unlimited parameter
////function declaration 
// function allsum(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++)
//         sum+=arguments[i];
//         return sum;
    
// }
////function call
// let res=allsum(2,3,4,5)
// console.log(res);

// //Arrow Function
// //one parameter
// const squre =(x)=>x*x
// let sqr =squre(9)
// console.log(sqr);
// //multiple parameter
// let add=(x=5,y=5)=>x+y
// let sum=add(2)
// console.log(sum);
// //multiple statement in function expresion
// let mul =(x,y)=>{
//     console.log(`multiplication of ${x} and ${y} is `);
//     return x*y
// }
// let mult=mul(4,5)
// console.log(mult);
// //returning of object
// const sumAndDiff=(a,b)=>({sum:a+b,difference:a-b});
// let result=sumAndDiff(5,7)
// console.log(result);

// //anonymous function(function without name)
// let ann=function (){
//     console.log("i m anonymous function");
    
// }
// ann()

// //imigetly invoked function(iife)(use at a time)
// (function display(){
//     console.log("hello i m iife function")
    
// })();

//iife with anonymous function(function without name)
(function (){
    console.log("i m anonymous function in iife");
    
})();










