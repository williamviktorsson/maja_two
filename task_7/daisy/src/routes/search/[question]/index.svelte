<script>
    import Spinner from "$lib/components/Spinner.svelte";
    import Results from "$lib/components/Results.svelte";
    import { page } from "$app/stores";
    import { search } from "$lib/api/search";
</script>

<!-- The page to show when the visiting /search/[slug] (shown in the search __layout slot) -->

{#await search($page.params.question)}
    <Spinner />
{:then result}
    <Results json={result} />
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
