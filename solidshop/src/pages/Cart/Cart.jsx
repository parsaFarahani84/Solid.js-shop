import Card from "../../components/Card/Card";

import { dataStore } from "../../store/dataStorage";

function Cart() {
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
