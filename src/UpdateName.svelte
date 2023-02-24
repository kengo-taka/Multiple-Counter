<script lang="ts">
  import { fade, slide, scale } from "svelte/transition";
  import { myStore } from "./store";

  export let name;
  export let showModal;
  export let index;

  $: localShowModal = showModal;

  export const update = () => {
    myStore.update((array) => {
      array.counters[index] = { ...array.counters[index], name };
      return array;
    });
    showModal = false;
  };

  export const cancel = () => {
    showModal = false;
  };
</script>

{#if localShowModal}
  <div class="back" transition:fade>
    <div class="modal">
      <input type="text" bind:value={name} />
      <button on:click={update} class="updateButton">Update</button>
      <button on:click={cancel} class="normalButton">Cancel</button>
    </div>
  </div>
{/if}

<style>
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

  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .modal {
    padding-top: 50px;
    text-align: center;
  }
</style>
