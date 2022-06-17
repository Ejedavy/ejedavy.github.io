export { };

var url:string = "https://favqs.com/api/qotd";

console.log("Hello World!");

const QuoteElement: HTMLSpanElement = document.querySelector("#quote") as HTMLSpanElement;
const AuthorElement: HTMLSpanElement = document.querySelector("#author") as HTMLSpanElement;

function getData(): void {
    fetch(url).then((response) => {
        return response.json()
    }).then((data => {
        QuoteElement.textContent = "\"" + data.quote.body + "\"";
        AuthorElement.textContent = "-" + data.quote.author;
    }))
}

getData();