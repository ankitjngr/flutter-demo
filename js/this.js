// GLOBAL SCOPE
console.log(this); // Window

// FUNCTION SCOPE
function checkThis(){
    console.log(this)
}
checkThis() // Window

// MEHTHOD OR BLOCK SCOPE
let obj = {
    name : 'naveen jangir',
    sayName : function (){
        console.log(this)
    },
    sayArrow: ()=>{
        console.log(this)
    }
}

obj.sayName() // {name: 'naveen jangir', sayName: f}
obj.sayArrow()// Window



//EVENT HANDLER
document.querySelector('h1').addEventListener("click", function(){
    if(this.style.color == "red"){
        this.style.color = 'green'
    }else{
         this.style.color = 'red'
    }
    console.log(this.style.color ) //  <h1>Hello world</h1>
})


// CLASS SCOPE

class thisScope{
    constructor(){
        this.a = 132
        this.name = 'naveen jangir'
        console.log(this) //{a: 132, name: 'naveen jangir'}
    }
}


let first = new thisScope()

//BIND , CALL AND APPLY
//we can set this value while calling function
let object1 = {
    name : 'naveen jangir',
    age : 22
}

function printDetails(a, b){
    console.log(a, b) // arg1 arg2
    console.log(this) // {name: 'naveen jangir', age: 22}
    console.log(`My name is ${this.name} and my age is ${this.age}`)
}


printDetails.call(object1, 'arg1', 'arg2') 

// if we want to use apply then we have to pass arguments in array form with  only two parameters   
printDetails.apply(object1, ['arg1', 'arg2'])

// if we want to use bind then it will return a new function with this value set to object1
let boundFunction = printDetails.bind(object1, 'arg1', 'arg2')
boundFunction() 