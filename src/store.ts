import { writable, type Writable } from 'svelte/store';

type CounterType = {
  counters: {
    id: number,
    name: string,
    count: number
  }[]
}

export const myStore: Writable<CounterType> = writable({
  counters: [
    {
      id: 1,
      name: 'New Counter',
      count: 0
    }
  ]
});
