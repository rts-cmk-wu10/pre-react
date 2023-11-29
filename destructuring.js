const ARCHIVE = [
	{
		title: "Trump Jalied! 1",
		abstract: "Trump finally put in prison... blah blah",
		imgURL: "https://placekitten.com/300"
	},
	{
		title: "Trump Jalied! 2",
		abstract: "Trump finally put in prison... blah blah",
		imgURL: "https://placekitten.com/300"
	},
	{
		title: "Trump Jalied! 3",
		abstract: "Trump finally put in prison... blah blah",
		imgURL: "https://placekitten.com/300"
	},
	{
		title: "Trump Jalied! 4",
		abstract: "Trump finally put in prison... blah blah",
		imgURL: "https://placekitten.com/300"
	}
]

const [first_element, second_element] = ARCHIVE

//console.log(second_element)

const OBJECT = {
	hej: "goddav",
	farvel: "hej hej",
	davs: "halløj",
	underobjekt: {
		tissemyre: "sukkermad"
	}
}


const { farvel, underobjekt: { tissemyre } } = OBJECT

console.log(tissemyre)
