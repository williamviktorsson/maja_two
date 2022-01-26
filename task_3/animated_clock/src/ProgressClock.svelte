<script>
    export let minutes;
</script>

<svg viewBox="0 0 36 36" class="circular-chart green">
    <path
        class="circle"
        stroke-dasharray={($minutes % 60) * (100 / 60) + ",100"}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
    />
</svg>

<style>

    svg{
        max-width: 50%;
        max-height: 50%;
    }

    .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
        stroke: #4cc790;
    }

</style>
