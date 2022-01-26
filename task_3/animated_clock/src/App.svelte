<script>
    import { Clock } from "./clock.js";
    import { fade, fly, slide, draw } from "svelte/transition";
    import { spring, tweened } from "svelte/motion";
    import DigitalClock from "./DigitalClock.svelte";
    import AnalogClock from "./AnalogClock.svelte";
    import ProgressClock from "./ProgressClock.svelte";
    import Spinner from "./Spinner.svelte";
    import { onMount } from "svelte";

    let clock = new Clock(13, 37);

    clock.setAlarm(13, 50);

    let minutes = spring(
        parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute)
    );

    function tick() {
        clock.tick();
        clock = clock;
        minutes.set(
            parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute)
        );
    }

    setInterval(tick, 1000);

    let elias = [1, 2, 3];
</script>

<main>
    <!-- Inspired by: https://svelte.dev/repl/clock?version=3.38.2 -->

    <AnalogClock {minutes} />

    <Spinner {minutes} />

    <ProgressClock {minutes} />
</main>

<style>
    :global(body) {
        padding: 0;
        margin: 0;
    }

    main {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        display: grid;
        justify-content: center;
        padding-top: 5%;
        padding-bottom: 5%;
        align-items: center;
        flex-direction: row;
        grid-column: auto 3;
        gap: 50px;
    }



    #alarm {
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
            infinite;
        transform: translate3d(0, 0, 0);
        display: inline-block;
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
</style>
