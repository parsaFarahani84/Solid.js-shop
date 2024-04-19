import { useAtom } from "solid-jotai";
import Card from "../../components/Card/Card";

import { dataStore, setDataStore } from "../../store/dataStorage";

function Cart() {
  // const [ProductClicked] = useAtom(datastore);

  return (
    <div class="mainShopppin">
      <div class="shoppingCart">
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
      </div>
    </div>
  );
}

export default Cart;
