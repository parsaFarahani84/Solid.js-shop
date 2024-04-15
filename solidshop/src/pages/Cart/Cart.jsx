import { atom, useAtom } from "solid-jotai";
import Card from "../../components/Card/Card";
import data from "../../../data/db.json";
import { createSignal } from "solid-js";

export const clicked = atom(0);

function Cart() {
  const [dataBase, setDataBase] = createSignal([]);
  const [ProductClicked] = useAtom(clicked);

  function addProduct(id) {
    const selected = data.products.filter((product) => product.id === id);
    // -------------------------------------------------------------
    const [count, setCount] = createSignal(0);
    // Assuming only one product will have a unique ID
    const productToAdd = selected[0];

    if (count() >= 1) {
    } else {
      setDataBase((oldProductData) => [
        ...oldProductData,
        {
          title: productToAdd.title,
          id: productToAdd.id,
          img: productToAdd.img,
          price: productToAdd.price,
          number: selected ? setCount((d) => d + 1) : count(),
        },
      ]);
    }
    // -------------------------------------------------------------
  }

  return (
    <div class="mainShopppin">
      <div class="shoppingCart">
        {/* <For each={products()}>
          {(product) => (
            <Card title={product.title} des="" btn="Buy">
              <div>
                {" "}
                <img src={product.img} />
                <p>{` X${product.number}, $${product.price}`}</p>
              </div>
            </Card>
          )}
        </For> */}
      </div>
    </div>
  );
}

export default Cart;
