import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		counters: [
      { title: 'Counter 1', count: 0, id :1 },
    ],
	}
});

export default app;