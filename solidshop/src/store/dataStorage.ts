import { reload } from "@solidjs/router";
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

type ReLoad = {
  ReLoad: boolean;
};

export let [reredndering, setRerendering] = createStore<ReLoad>({
  ReLoad: false,
});
