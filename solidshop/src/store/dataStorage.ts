import { createStore } from "solid-js/store";

type MyData = {
  title: string;
  description: string;
  id: number;
  number: number;
  price: number;
  img: string;
};

export const [dataStore, setDataStore] = createStore<MyData[]>([]);
