// Lambda funktioner, også kaldet fat-arrow functions


//implicit return
const myFunction = () => console.log(this)

//console.log(myFunction())

// lexical
function myOtherFunction() {
	console.log(this)
}

document.addEventListener("DOMContentLoaded", myFunction)

// eksplicit return
/* function (x, y, z) {
	return "Hello, World!"
} */