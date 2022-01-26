<script>
    export let minutes;
    import { draw } from "svelte/transition";
    import { Clock } from "../../../task_4/animated_clock/src/clock";
</script>

<svg
    viewBox="-50 -50 100 100"
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="graph"
    aria-labelledby="title"
    role="img"
>
    <defs>
        <filter
            id="f"
            filterUnits="userSpaceOnUse"
            y1="42"
            y2="45"
            width="120%"
            height="120%"
        >
            <feGaussianBlur in="Sourlpha" stdDeviation="5" result="blur" />
            <feOffset in="blur" dx="3" dy="1" result="shadow" />
            <feFlood flood-color="rgba(0,0,0,.52)" result="color" />
            <feComposite in="color" in2="shadow" operator="in" />
            <feComposite in="SourceGraphic" />
        </filter>
    </defs>
    <circle class="clock-face" r="48" />

    <!-- markers -->
    {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
        <line class="major" y1="40" y2="45" transform="rotate({30 * minute})" />

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


<style>
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
        filter: url(#f);
        stroke-linecap: round;
    }

    .hour {
        stroke: #333;
        stroke-width: 2;
        filter: url(#f);
        stroke-linecap: round;
    }
</style>
