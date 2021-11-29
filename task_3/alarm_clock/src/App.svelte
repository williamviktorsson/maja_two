<script>
    import { Clock } from "./clock.js";
    import { fade, fly, slide, draw } from "svelte/transition";
    import { spring, tweened } from "svelte/motion";

    let clock = new Clock(13, 37);

    clock.setAlarm(13, 50);

    let hours = spring(parseInt(clock.time.hour));
    let minutes = spring(
        parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute)
    );

    function tick() {
        clock.tick();
        clock = clock;
        hours.set(parseInt(clock.time.hour));
        minutes.set(
            parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute)
        );
    }

    setInterval(tick, 1000);
</script>

<main>
    <!-- Inspired by: https://svelte.dev/repl/clock?version=3.38.2 -->
    <svg viewBox="-50 -50 100 100">
        <circle class="clock-face" r="48" />

        <!-- markers -->
        {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
            <line
                class="major"
                y1="40"
                y2="45"
                transform="rotate({30 * minute})"
            />

            {#each [1, 2, 3, 4] as offset}
                <line
                    class="minor"
                    y1="42"
                    y2="45"
                    transform="rotate({6 * (minute + offset)})"
                />
            {/each}
        {/each}

        <!-- hour hand -->
        <line
            class="hour"
            y1="33"
            y2="38"
            transform="rotate({(6 / 12) * $minutes - 180})"
        />

        <!-- minute hand -->
        <g transform="rotate({6 * $minutes - 180})">
            <line class="minute" y1="30" y2="38" />
        </g>
    </svg>

    <div>
        {#key clock.time.hour}
            <span in:fly={{ y: -20 }}>
                {clock.time.hour}
            </span>
        {/key}
        <span>:</span>
        {#key clock.time.minute}
            <span in:fly={{ y: -20 }}>
                {clock.time.minute}
            </span>
        {/key}
    </div>

    <button on:click={tick}> HIT ME! </button>

    {#if clock.isTriggered}
        <p  id="alarm" in:fly={{ y: 200 }} out:fade>VAKNA!!!!</p>
    {/if}
</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }

    span {
        display: inline-block;
        font-size: 8em;
        font-weight: bolder;
    }

    main {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        display: flex;
        justify-content: start;
        padding-top: 5%;
        padding-bottom: 5%;
        align-items: center;
        flex-direction: column;
        gap: 50px;
    }

    #alarm {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
            infinite;
        transform: translate3d(0, 0, 0);
        display: inline-block;
        font-size: 5em;
        font-weight: bolder;
    }

    @keyframes gradient {
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

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }

    svg {
        width: 50%;
        height: 50%;
    }

    .clock-face {
        stroke: #333;
        fill: none;
    }

    .minor {
        stroke: rgb(56, 56, 56);
        stroke-width: 0.4;
    }

    .major {
        stroke: #333;
        stroke-width: 0.8;
    }

    .minute {
        stroke: rgb(180, 0, 0);
        stroke-width: 1;
    }

    .hour {
        stroke: #333;
        stroke-width: 2;
    }
</style>
