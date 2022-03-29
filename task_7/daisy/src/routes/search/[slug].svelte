<script context="module">
    // ran before loading page
    export async function load({ params, fetch, session, stuff }) {
        let promise = search(
            `https://demo.dataverse.org/api/search?q=` + params.slug
        );

        return {
            props: {
                // promise in props matches to "export let promise in script tag"
                // params.slug matches [slug].svelte
                promise: promise,
            },
        };
    }

    async function search(url) {
        const response = await fetch(url);
        return await response.json();
    }
</script>

<script>
    import Spinner from "./Spinner.svelte";
    import Results from ".//Results.svelte";
    import Search from "./Search.svelte";
    export let promise;
</script>

<main>
    <Search />

    {#await promise}
        <Spinner />
    {:then result}
        <Results json={result} />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }

    main {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 50px;
        padding-top: 10%;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;
        box-sizing: border-box;
    }
</style>
