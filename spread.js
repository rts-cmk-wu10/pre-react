const numbers = [4132, 45, 1, 63453]

const new_numbers = [438937845, ...numbers]

//console.log(new_numbers)

const myCars = {
	ford: "fiesta",
	volvo: "amazone",
	suzuki: "jimny"
}

const myBicycles = {
	kildemoes: "den Milad har set",
	floop: "dingenot"
}

const myVehicles = {...myCars, ...myBicycles}

console.log(myVehicles)
