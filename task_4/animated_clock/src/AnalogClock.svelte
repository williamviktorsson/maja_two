<script>
    export let minutes;
</script>

<svg viewBox="-50 -50 100 100">
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
    }

    .hour {
        stroke: #333;
        stroke-width: 2;
    }
</style>
