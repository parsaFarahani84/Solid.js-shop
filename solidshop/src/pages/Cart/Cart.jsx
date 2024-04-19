import { Show } from "solid-js";
import Card from "../../components/Card/Card";

import { dataStore, reredndering } from "../../store/dataStorage";

function Cart() {
  console.log(reredndering);

  return (
    <div class="mainShopppin">
      <div class="shoppingCart">
        <Show when={dataStore} fallback="...Loading">
          <For each={dataStore}>
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
        </Show>
      </div>
    </div>
  );
}

export default Cart;
