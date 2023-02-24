<script lang="ts">
  import UpdateName from "./UpdateName.svelte";
  import { scale } from 'svelte/transition'
  import { myStore } from "./store";
  export let id;
  export let name;
  export let count
  export let showModal = false;

  export const increment = () => {
    myStore.update((array) => {
      let index = $myStore.counters.findIndex((obj) => obj.id === id);
      let newCount = array.counters[index].count + 1;
      array.counters[index] = { ...array.counters[index], count: newCount };
      return array;
    });
  };

  export const decrement = () => {
    myStore.update((array) => {
      let index = $myStore.counters.findIndex((obj) => obj.id === id);
      let newCount = array.counters[index].count - 1;
      array.counters[index] = { ...array.counters[index], count: newCount };
      return array;
    });
  };

  export const reset = () => {
    myStore.update((array) => {
      let index = $myStore.counters.findIndex((obj) => obj.id === id);
      array.counters[index] = { ...array.counters[index], count: 0 };
      return array;
    });
  };

  export const remove = () => {
    myStore.update((array) => {
      return {
        counters: array.counters.filter((obj) => obj.id !== id),
      };
    });
  };

  export const openModal = () => {
    showModal = true;
  };

  export const closeModal = () => {
    showModal = false;
  };
</script>

<div class="card" transition:scale  >
  <p class="cardTitle">{name || "No title"}</p>
  <p class="cardCount">{count}</p>
  <button on:click={increment} class="normalButton">+</button>
  <button on:click={decrement} class="normalButton">-</button>
  <button on:click={reset} class="normalButton">Reset</button>
  <div />
  <button on:click={remove} class="normalButton">Remove</button>
  <button on:click={openModal} class="updateButton">Update Name</button>
  <UpdateName name={name} index={$myStore.counters.findIndex((obj) => obj.id === id)} bind:showModal />
</div>

<style>
  .card {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    padding: 10px;
    position: relative;
    text-align: center;
    width: 80%;
    max-width: 300px;
    margin: 10px auto;
  }

  .cardTitle {
    font-size: 16px;
    font-weight: bold;
  }

  .cardCount {
    font-size: 40px;
    font-weight: bold;
  }

  .normalButton {
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .updateButton {
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    background-color: rgb(38, 157, 29);
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
