import { createSignal } from "solid-js";
import { useParams } from "@solidjs/router";
import data from "../../../data/db.json";
import { useAtom, atom, useSetAtom } from "solid-jotai";
import styles from "./TheProduct.module.css";
import { atomData } from "../Cart/Cart";

function TheProduct() {
  const params = useParams();
  const [count, setCount] = createSignal(0);
  const [productData, setProductData] = useAtom(atomData);

  function addProduct(id) {
    const selected = data.products.filter((product) => product.id === id);
    // -------------------------------------------------------------

    // Assuming only one product will have a unique ID
    const productToAdd = selected[0];

    if (count() >= 1) {
      console.log("lolo");
    } else {
      setProductData((oldProductData) => [
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
    <div>
      {data.products.map((e) => {
        if (e.id == params.id) {
          return (
            <div class={styles.container}>
              <div class={styles.left}>
                <img src={e.img} />
              </div>
              <div class={styles.right}>
                <h1>{e.title}</h1>
                <p>{e.description}</p>
                <button onclick={() => addProduct(e.id)} class="btn">
                  Order
                </button>
              </div>
            </div>
          );
        } else {
          return;
        }
      })}
    </div>
  );
}

export default TheProduct;
