function getFee(isMember) {
	return isMember ? "$2.00" : "$10.00"
}

console.log(getFee(NaN))
