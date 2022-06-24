url = "https://favqs.com/api/qotd";

function getData() {
    fetch(url).then((response) => {
        return response.json()
    }).then((data => {
        document.querySelector("#quote").textContent = "\"" + data.quote.body + "\"";
        document.querySelector("#author").textContent = "-" + data.quote.author;
    }))
}

getData();