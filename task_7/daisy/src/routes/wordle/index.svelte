<script>
    import { fly } from "svelte/transition";

    let grid = [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ];

    let word = "HORSE";
    let corrects = [];
    let contains = [];

    let colindex = 0;
    let rowindex = 0;

    function handleKeydown(event) {
        let key = event.key;
        if (key === "Backspace") {
            deleteKey();
        } else if (key === "Enter") {
            if (colindex == 5) {
                colindex = 0;
                rowindex++;
            } else {
                showModal = true;
                setTimeout(() => {
                    showModal = false;
                }, 1500);
            }
        } else {
            if (String.fromCharCode(event.keyCode).match(/(\w|\s)/g)) {
                placeKey(key);
            }
        }
    }

    let showModal = false;

    function placeKey(key) {
        let temp = key.toUpperCase();
        if (colindex < 5 && rowindex < 6) {
            grid[rowindex][colindex] = temp;
            if (word.includes(temp) && !contains.includes(temp)) {
                contains.push(temp);
            }

            if (word[colindex] == temp && !corrects.includes(temp)) {
                corrects.push(temp);
            }
            grid = grid;
            colindex++;
        }
    }
    function deleteKey() {
        if (colindex > 0) {
            colindex--;
            grid[rowindex][colindex] = "";
            grid = grid;
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="m-20 flex-column justify-center gap-20">
    {#each grid as row, rowi}
        <div class="flex justify-center gap-1 my-1 w-full">
            {#each row as column, coli}
                <input
                    class:contains={rowi < rowindex &&
                        contains.includes(grid[rowi][coli])}
                    class:correct={rowi < rowindex &&
                        grid[rowi][coli] != "" &&
                        word[coli] == grid[rowi][coli]}
                    disabled
                    type="text"
                    class="card card-bordered w-20"
                    bind:value={grid[rowi][coli]}
                />
            {/each}
        </div>
    {/each}

    <div class="h-20" />

    <div class="flex justify-center gap-1 my-1 w-full">
        <kbd
            class="kbd"
            class:contains={contains.includes("Q")}
            class:corrects={corrects.includes("Q")}
            on:click={() => placeKey("Q")}>Q</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("W")}
            class:corrects={corrects.includes("W")}
            on:click={() => placeKey("W")}>W</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("E")}
            class:corrects={corrects.includes("E")}
            on:click={() => placeKey("E")}>E</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("R")}
            class:corrects={corrects.includes("R")}
            on:click={() => placeKey("R")}>R</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("T")}
            class:corrects={corrects.includes("T")}
            on:click={() => placeKey("T")}>T</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("Y")}
            class:corrects={corrects.includes("Y")}
            on:click={() => placeKey("Y")}>Y</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("U")}
            class:corrects={corrects.includes("U")}
            on:click={() => placeKey("U")}>U</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("I")}
            class:corrects={corrects.includes("I")}
            on:click={() => placeKey("I")}>I</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("O")}
            class:corrects={corrects.includes("O")}
            on:click={() => placeKey("O")}>O</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("P")}
            class:corrects={corrects.includes("P")}
            on:click={() => placeKey("P")}>P</kbd
        >
    </div>
    <div class="flex justify-center gap-1 my-1 w-full">
        <kbd
            class="kbd"
            class:contains={contains.includes("A")}
            class:corrects={corrects.includes("A")}
            on:click={() => placeKey("A")}>A</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("S")}
            class:corrects={corrects.includes("S")}
            on:click={() => placeKey("S")}>S</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("D")}
            class:corrects={corrects.includes("D")}
            on:click={() => placeKey("D")}>D</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("F")}
            class:corrects={corrects.includes("F")}
            on:click={() => placeKey("F")}>F</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("G")}
            class:corrects={corrects.includes("G")}
            on:click={() => placeKey("G")}>G</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("H")}
            class:corrects={corrects.includes("H")}
            on:click={() => placeKey("H")}>H</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("J")}
            class:corrects={corrects.includes("J")}
            on:click={() => placeKey("J")}>J</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("K")}
            class:corrects={corrects.includes("K")}
            on:click={() => placeKey("K")}>K</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("L")}
            class:corrects={corrects.includes("L")}
            on:click={() => placeKey("L")}>L</kbd
        >
    </div>
    <div class="flex justify-center gap-1 my-1 w-full">
        <kbd
            class="kbd"
            class:contains={contains.includes("Z")}
            class:corrects={corrects.includes("Z")}
            on:click={() => placeKey("Z")}>Z</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("X")}
            class:corrects={corrects.includes("X")}
            on:click={() => placeKey("X")}>X</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("C")}
            class:corrects={corrects.includes("C")}
            on:click={() => placeKey("C")}>C</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("V")}
            class:corrects={corrects.includes("V")}
            on:click={() => placeKey("V")}>V</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("B")}
            class:corrects={corrects.includes("B")}
            on:click={() => placeKey("B")}>B</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("N")}
            class:corrects={corrects.includes("N")}
            on:click={() => placeKey("N")}>N</kbd
        >
        <kbd
            class="kbd"
            class:contains={contains.includes("M")}
            class:corrects={corrects.includes("M")}
            on:click={() => placeKey("M")}>M</kbd
        >
    </div>
</main>

{#if showModal}
    {#key showModal}
        <div
            in:fly={{ x: -2000 }}
            out:fly={{ x: 200 }}
            role="alert"
            class="fade alert alert-warning show alert-enter-done w-80 self-center"
        >
            😕 Too short of a word
        </div>
    {/key}
{/if}

<style>
    input {
        text-align: center;
    }

    input.contains {
        background-color: rgb(233, 233, 97);
        border-color: yellow;
    }

    input.correct {
        background-color: rgb(81, 216, 81);
        border-color: green;
    }
</style>
