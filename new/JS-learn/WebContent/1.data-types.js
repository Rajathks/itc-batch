/**
 * 
 */


/*
 *  data-types
 *  -----------
 *  
 *  1. primitives
 *  
 *  	a. string
 *      b. number
 *      c. boolean
 *      d. undefined
 *  
 *  2. references
 *  
 * 
 * 
 */

//----------------------------------------

// a. string

var name="Nag";
var selection='a';

//----------------------------------------

// b. number

var count=10;
var cost=12.12;


//----------------------------------------

//c.boolean

var isFound=true;


//----------------------------------------

// d. undefined

var v;

//-----------------------------------------

// 2. references ==> objects


/*
 *  How to create objects in .js language ?
 *  
 *  var ref=new Constructor();
 * 
 * 
 */

//var person=new Object();
//person.name="Nag";
//person.age=32;
//person.doWork=function(){
//	console.log('working...');
//}
//
//delete person.age;
//
//console.log(person.age);
//

//----------------------------------


// literal-style objects  ( without new keyword )

// 1.

var config=new Object();
config.url="http://...";
config.method="GET";
config.type="JSON";

// or

var config={
		url:'http://',
		method:'GET',
		type:'JSON'
};



//----------------------------------


//2.

var arr=new Array();

// or

var arr=[];

//----------------------------------

// 3. RegExp

var re=new RegExp('\\d{10}');

// or

var re=/\d{10}/;

//----------------------------------

// 4. Function


var add=new Function("n1","n2","var r=n1+n2;return r;");

// or

function add(n1,n2){
	var r=n1+n2;
	return r;
}


//----------------------------------------


// How to access obj's properties ?


var person={
		name:"Nag",
		"full-name":'Nag N'
};

console.log(person.name);
console.log(person['name']);


console.log(person["full-name"]);



















