<script>
    import Spinner from "./Spinner.svelte";
    import Results from "./Results.svelte";
    import Search from "./Search.svelte";
    import { promise } from "./stores.js";
</script>

<main class:searched={$promise != undefined}>
    <Search />

    {#await $promise}
        <Spinner />
    {:then result}
        <Results json={result} />
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</main>

<style>
  :global(body) {
    padding: 0;
    margin: 0;
  }

  main {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
      -45deg,
      #b966522f,
      #8a65743a,
      #939ea13d,
      #ddf5ef3f
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    box-sizing: border-box;
  }

    main.searched {
        background: linear-gradient(
            -45deg,
            #cf46232f,
            #b9074e3a,
            #13a2c93d,
            #15dcaa3f
        );
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
</style>
