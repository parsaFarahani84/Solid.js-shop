import { Show, createSignal } from "solid-js";
import Card from "../../components/Card/Card";
import { dataStore } from "../../store/dataStorage";

function Cart() {
  console.log(dataStore.list);
  return (
    <div class="mainShopppin">
      <div class="shoppingCart">
        {dataStore.list.map((product) => (
          <Card title={product.title} des="" btn="Buy">
            <div>
              {" "}
              <img src={product.img} />
              <p>{` X${product.number}, $${product.price}`}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cart;
