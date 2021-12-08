<script>
    import { fly } from "svelte/transition";
    export let clock;
</script>

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

<style>
    span {
        display: inline-block;
        font-weight: bolder;
    }
</style>
