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

const BLAH = ARCHIVE.map(function (article) {
	return `<h1>${article.title}</h1>
		<p>${article.abstract}</p>
		<img src="${article.imgURL}">`
})

console.log(ARCHIVE)
console.log(BLAH)

document.body.innerHTML = BLAH.join("")
