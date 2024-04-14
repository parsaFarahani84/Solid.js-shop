import { atom, useAtom } from "solid-jotai";
import Card from "../../components/Card/Card";

export const atomData = atom([]);

function Cart() {
  const [products] = useAtom(atomData);

  return (
    <div class="mainShopppin">
      <div class="shoppingCart">
        <For each={products()}>
          {(product) => (
            <Card title={product.title} des="" btn="Buy">
              <div>
                {" "}
                <img src={product.img} />
                <p>{` X${product.number}, $${product.price}`}</p>
              </div>
            </Card>
          )}
        </For>
      </div>
    </div>
  );
}

export default Cart;
