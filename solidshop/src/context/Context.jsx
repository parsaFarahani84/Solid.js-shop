import { createStore } from "solid-js/store";

export function Context(props) {
  const [items, setItems] = createStore([
    {
      title: "lala",
      price: "20",
      quantity: "2",
      id: Math.random(),
    },
  ]);

  return <div>{props.children}</div>;
}

export default Context;
