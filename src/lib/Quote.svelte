<script lang="ts">
    export {};

    var url: string = "https://favqs.com/api/qotd";

    let quoteElement: string;
    let authorElement: string;

    function getData(): void {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                quoteElement = '"' + data.quote.body + '"';
                authorElement = "-" + data.quote.author;
            });
    }

    getData();
</script>

<blockquote class="quotes">
    <h4>Quote of the day:</h4>
    <br />
    {quoteElement}
    <br />
    {authorElement}
</blockquote>
