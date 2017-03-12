/**
 * 
 */

/*
 *  .js lang, we can create func in 2-ways
 *  
 *  1. function declaration
 *  
 *  2. function expression
 * 
 */

//-------------------------------------

//1. function declaration

//console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}

//console.log(add(12,13));

//-------------------------------------


//2. function expression

//console.log(add(12,13)); // Type Error , add is not function

//var add=function(n1,n2){
//	return n1+n2;
//}

//console.log(add(12,13));


//-------------------------------------

// a. functions as values
//
//function sayHello(){
//	console.log('Hello..');
//}
//
//
//var sayHi=sayHello;
//
//sayHi();

//-------------------------------------

// b. functions as args

//
//function greet(f){
//	if(f){
//		f();
//		return;
//	}
//	console.log('Hello...');
//}
//
//greet();
//greet(function(){console.log('Ola...')});
//


//var nums=[1,3,5,7,9,2,4,6,8,10];
////nums.sort();
//
//nums.sort(function(a,b){
//	return b-a;
//});
//
//console.log(nums);
//

//-------------------------------------


// c. functtion as return 

//function teach(){
//	console.log('teaching...');
//	
//	function learn(){
//		console.log('learn...');
//	}
//	
//	return learn;
//	
//}
//
//var learnFunc=teach();
//
//learnFunc();
//learnFunc();


//-------------------------------------


// variable scope

//var v=12; // global scoped var
//
//function f(){
//	console.log(v);
//}
//
//f();

//-------------------------

//function f(){
//	var v=12; // function-scoped
//}
//
//f();
//
//console.log(v);
//

//-------------------------

//function f(){
//	
//	{
//		var v=12;
//	}
//	
//	console.log(v);
//	
//}
//
//f();
//

//----------------------------

//console.log(v);
//let v=12;

//-----------------------------


//
//function f(a,b,c,d){
//	console.dir(arguments);
//	return arguments[0];
//}
//
//console.log(f(1,2,3,4));


function sum(){
	let r=0,
	    len=arguments.length,
	    i=0;
	
	while(i<len){
		r+=arguments[i];
		i++;
	}
	
	return r;
}















