import { For, Show, createResource } from "solid-js";
import Card from "../../components/Card/Card";
import data from "../../../data/db.json";
// import axios from "axios";

// const fetchData = async () => {
//   const res = await axios("https://fakestoreapi.com/products/");
//   return res.data;
// };

function Home() {
  // const [products] = createResource(data.products);
  const products = data.products;

  return (
    // <Show when={products()} fallback={<div class="loader"></div>}>
    //   <div class="gridCard">
    //     <For each={products()}>
    //       {(p) => (
    //         <Card title={p.title} btn="Buy" des={p.description} img={p.img} />
    //       )}
    //     </For>
    //     {console.log(products())}
    //   </div>
    // </Show>

    <div>
      <div class="gridCard">
        {products.map((p) => {
          return (
            <Card
              title={p.title}
              btn="Buy"
              des={p.description}
              img={p.img}
              id={p.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
