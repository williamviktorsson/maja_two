<script>
    import { promise } from "./stores.js";
    let question;
    async function search() {
        const res = await fetch(
            `https://demo.dataverse.org/api/search?q=` + question
        );
        const json = await res.json();

        if (res.ok) {
            return json;
        } else {
            throw new Error(json);
        }
    }


  $: searched = $promise != undefined;

  
</script>

<div class:searched={$promise != undefined}>
    <form
        on:submit|preventDefault={() => {
            $promise = search();
        }}
    >
        <input bind:value={question} />
    </form>
</div>

<style>
    div {
        display: flex;
        gap: 10px;
        width: 30%;
        justify-self: center;
        align-items: center;
        transition: all 0.3s;
        position: absolute;
        top: 20%;
        left: 35%;
    }

    div.searched {
        position: absolute;
        left: 10%;
        top: 20%;
        width: 30%;
    }

    form,
    form input {
        width: 100%;
    }
</style>
