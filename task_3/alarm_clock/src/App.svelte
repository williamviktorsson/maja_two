<script>
    import DigitalClock from "./DigitalClock.svelte";
    import { Clock } from "./clock.js";
    import { fly, fade, slide, draw } from "svelte/transition";
    import { spring, tweened } from "svelte/motion";

    let clock = new Clock(13, 37);

    let minute = spring(clock._minute);

    clock.alarm = "13:50";

    function tick() {
        clock.tick();
        clock = clock;
        minute.set(clock._minute + clock._hour*60);
    }

    setInterval(tick, 1000);
</script>

<main>
    <svg viewBox="-50 -50 100 100">
        <circle class="clock-face" r="48" />

        {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minutes}
            <line
                class="hour"
                y1="40"
                y2="45"
                transform="rotate({30 * minutes})"
            />

            {#each [1, 2, 3, 4] as offset}
                <line
                    class="hour"
                    y1="42"
                    y2="45"
                    transform="rotate({6 * (minutes + offset)})"
                />
            {/each}
        {/each}

        <line
            class="hour"
            y1="0"
            y2="35"
            transform="rotate({180 + 6 * $minute})"
        />

        <line
            class="hour"
            y1="0"
            y2="35"
            transform="rotate({180 + (6 / 12) *  $minute})"
        />
    </svg>

    <DigitalClock {clock} />

    <button on:click={tick}> HIT ME! </button>

    {#if clock.isTriggered}
        <p>VAKNA!!!</p>
    {/if}
</main>

<style>
    svg {
        width: 50%;
        height: 50%;
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }

    main {
        padding-top: 5%;
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        color: red;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 200% 200%;
        align-items: center;
        justify-content: start;
        gap: 50px;
        animation: movement 15s ease infinite;
    }

    @keyframes movement {
        0% {
            background-position: 0% 50%;
        }

        50% {
            background-position: 100% 50%;
        }

        100% {
            background-position: 0% 50%;
        }
    }

    .clock-face {
        fill: none;
        stroke: #333;
    }

    .hour {
        stroke: #333;
        stroke-width: 0.8;
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

    span {
        display: inline-block;
    }

    #test {
        font-size: 4em;
        color: indianred;
    }
</style>
