<script>
    export let clock;
    import { fly, fade, slide, draw } from "svelte/transition";
</script>

<div>
    {#key clock.time.hour}
        <span in:fly={{ y: -20 }}>
            {clock.time.hour.toString().padStart(2, "0")}
        </span>
    {/key}
    <span> : </span>
    {#key clock.time.minute}
        <span in:fly={{ y: -20 }}>
            {clock.time.minute.toString().padStart(2, "0")}
        </span>
    {/key}
</div>
