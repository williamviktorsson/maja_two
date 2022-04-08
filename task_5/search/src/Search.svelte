<script>
    import { promise } from "./stores.js";
    let question;
    let searched = false;
    async function search() {
        searched = true;
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
</script>

<div class:searched={searched==true}>
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
        position: fixed;
        top: 20%;
        left: 35%;
    }

    div.searched {
 
        position: fixed;
        left: 10%;
        top: 20%;
        width: 30%;

    }

    form,
    form input {
        width: 100%;
    }
</style>
