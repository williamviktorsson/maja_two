<script>

	let time=1337;

	function tick() {
		time++;
	}

	setInterval(tick,1000)

</script>

<main>
<h1>
        Hehej
    </h1>

    <p>
        Tid: {time}
    </p>

	{#if (time>=1350)}
		    <p>
        VAKNA!!!
    </p>

	{/if}

    <button on:click={tick}>
        HIT ME!
    </button>

    <p id="time">

    </p>

    <p id="alarm">

    </p>

    <p id="test">
        1231231231!
    </p>

    <p class="tjenix">
        1231231231!
    </p>
</main>

<style>
	 main {
            color: red;
            background-color: pink;
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