<main>
    <div class="grid">
        {#each Array(100) as _, i}
            <!-- Probably here you want to show different videos than I have selected -->
            <div class="grid-item">
                <img
                    src={"https://picsum.photos/id/" + i + "/200/300"}
                    alt="random picture"
                    loading="lazy"
                />
            </div>
        {/each}
    </div>
</main>

<style>
    .grid {
        margin-top: 100px;
        display: grid;
        grid-row-gap: 50px;
        grid-column-gap: 50px;
        grid-template-columns: auto auto;
        padding: 10px;
    }

    .grid-item {
        cursor: pointer;
        background-color: var(--netflix-red-opacity);
        border: 1px solid var(--netflix-red);
        padding: 20px;
        font-size: 30px;
        text-align: center;
        height: 300px;
        width: 200px;
        background-size: cover; /* Resize the background image to cover the entire container */
    }
</style>
