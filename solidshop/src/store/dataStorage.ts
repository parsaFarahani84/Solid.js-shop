import { list } from "postcss";
import { createStore } from "solid-js/store";

type MyData = {
  title: string;
  description: string;
  id: number;
  number: number;
  price: number;
  img: string;
};

type State = {
  list: MyData[];
  update: number;
};

export const [dataStore, setDataStore] = createStore<State>({
  list: [],
  update: 0,
});
