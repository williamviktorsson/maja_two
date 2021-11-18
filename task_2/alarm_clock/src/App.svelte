<script>
    import { Clock } from "./clock.js";
    import SickButton from "./SickButton.svelte";

    let clock = new Clock(13, 37);

    clock.alarm = "13:50";

    let students = [1, 2, 3];

    let i = 0;

    function tick() {
        clock.tick();
        clock = clock;
        i++;
    }

    setInterval(tick, 1000);
</script>

<main>
    <h1>Hehej {i}</h1>

    <h2>
        students: {students}
    </h2>

    <button on:click={() => (students = [...students, students.length])}
        >add student</button
    >

    <p>
        Tid: {clock.time}
    </p>

    {#if clock.isTriggered}
        <p>VAKNA!!!</p>
    {/if}

    <input bind:value={clock.alarm} />

    <button on:click={tick}> HIT ME! </button>

    <p id="time" />

    <p id="alarm" />

    <SickButton />

    <p id="test">1231231231!</p>

    <p class="tjenix">1231231231!</p>
</main>

<style>
    :global(body) {
        color: red;
        background-color: pink;
        margin: 0;
    }

    h1 {
        color: greenyellow;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 8em;
    }

    p {
        font-size: 2em;
        color: black;
    }

    .tjenix {
        font-size: 10em;
        color: purple;
    }

    #test {
        font-size: 4em;
        color: indianred;
    }
</style>
