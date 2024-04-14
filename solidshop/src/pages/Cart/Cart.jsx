import Card from "../../components/Card/Card";
import { atom } from "solid-jotai";

export const countAtom = atom([{ title: "lolo", id: Math.random() }]);

function Cart() {
  console.log(countAtom.init);
  return (
    <div class="shopingCart">
      {/* <For each={store()}>
        {(p) => (
          <Card title="This Is Your Card" des="Nothing Here Yet" btn="Buy">
            <h2>Your Card</h2>
            <p>{`Product: ${p.title} , X${p.number} , $${p.price}`}</p>
          </Card>
        )}
      </For> */}

      {countAtom.init.forEach((p) => (
        <Card title="This Is Your Card" des="Nothing Here Yet" btn="Buy">
          <h2>Your Card</h2>
          <p>{`Product: ${p.title} ,`}</p>
        </Card>
      ))}
    </div>
  );
}

export default Cart;
