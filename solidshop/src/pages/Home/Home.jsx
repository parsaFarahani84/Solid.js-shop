import { For, Show, createResource } from "solid-js";
import Card from "../../components/Card/Card";
import axios from "axios";

const fetchData = async () => {
  const res = await axios("https://fakestoreapi.com/products/");
  return res.data;
};

function Home() {
  const [products] = createResource(fetchData);

  return (
    <Show when={products()} fallback={<div class="loader"></div>}>
      <div class="gridCard">
        <For each={products()}>
          {(p) => <Card title={p.title} btn="Buy" des={p.description} />}
        </For>
        {console.log(products())}
      </div>
    </Show>
  );
}

export default Home;
