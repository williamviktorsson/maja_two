<script>
    export let json;
    import { fly, fade, slide, draw } from "svelte/transition";
</script>

{#if json && "data" in json && "items" in json.data && json.data.items.length > 0}
    <div class="column">
        {#each json.data.items as item}
            <p transition:fade>{JSON.stringify(item)}</p>
        {/each}
    </div>
{:else if json}
    <div class="column">
        <p transition:fade>{JSON.stringify(json)}</p>
    </div>
{/if}

<style>
    .column {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        overflow-y: scroll;
    }

    .column p {
        border-radius: 25px;
        background-color: whitesmoke;
        border: 2px solid whitesmoke;
        padding: 20px;
    }

    ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: #ff0000;
    }
</style>
