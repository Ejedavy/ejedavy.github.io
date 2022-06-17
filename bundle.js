var url = "https://favqs.com/api/qotd";
console.log("Hello World!");
var QuoteElement = document.querySelector("#quote");
var AuthorElement = document.querySelector("#author");
function getData() {
    fetch(url).then(function (response) {
        return response.json();
    }).then((function (data) {
        QuoteElement.textContent = "\"" + data.quote.body + "\"";
        AuthorElement.textContent = "-" + data.quote.author;
    }));
}
getData();
