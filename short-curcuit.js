const ARTICLE = {
	title: "Hej",
	abstract: "Feta er godt, meget feta er meget godt",
	imgURL: "https://placekitten.com/300"
}

ARTICLE && document.write(`
	<h1>${ARTICLE.title}</h1>
	<p>${ARTICLE.abstract}</p>
	<img src="${ARTICLE.imgURL}">
`)