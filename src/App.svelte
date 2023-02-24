<script lang="ts">
	import Counter from "./Counter.svelte";
	import { myStore } from "./store";
	import { flip } from'svelte/animate'

	$: total = $myStore.counters.reduce((sum, { count }) => sum + count, 0);

	export let currentId = 1;

	export const addCounter = () => {
		myStore.update((array) => {
			let newId = currentId + 1;
			currentId += 1;
			array.counters.push({ id: newId, name: "New Counter", count: 0 });
			return array;
		});
	};
</script>

<main>
	<div class="header">
		<div class="logo" />
		<p class="title">Multiple Counter</p>
		<p class="kengo">by Kengo Takamiya</p>
	</div>
	<div class="greenBack">
		<p class="total">The total is {total}</p>
		<button on:click={addCounter} class="addButton">Add Counter</button>
	</div>
	<div class="container">
		<div class="counters">
			{#each $myStore.counters as counter (counter.id)}
			<div animate:flip={{duration: 500}}>
				<Counter bind:id={counter.id} name={counter.name} count={counter.count} />
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		margin: 0 auto;
	}

	.header {
		display: flex;
		padding: 10px;
	}

	.logo {
		background: rgb(22, 214, 17);
		background: linear-gradient(
			90deg,
			rgba(22, 214, 17, 1) 0%,
			rgba(0, 212, 255, 1) 100%
		);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.title {
		font-weight: bold;
		font-size: 25px;
		margin-right: 10px;
	}

	.kengo {
		font-weight: bold;
		font-size: 10px;
		align-self: flex-end;
		margin-bottom: 5px;
	}

	.total {
		text-align: center;
		font-weight: bold;
		font-size: 40px;
	}

	.greenBack {
		background: rgb(140, 230, 152);
		background: linear-gradient(
			90deg,
			rgba(140, 230, 152, 1) 0%,
			rgba(68, 205, 233, 0.19090909090909092) 100%
		);
		width: 100%;
		height: 120px;
		padding-top: 40px;
		text-align: center;
	}

	.addButton {
		margin: 0px auto;
		text-align: center;
		background-color: rgb(38, 157, 29);
		color: white;
		border-radius: 5px;
		border: none;
		font-size: 15px;
		padding: 10px 20px;
		margin-top: 10px;
		cursor: pointer;
	}

	.container {
		width: 80%;
		margin: 0 auto;
		padding: 10px;
	}
</style>
