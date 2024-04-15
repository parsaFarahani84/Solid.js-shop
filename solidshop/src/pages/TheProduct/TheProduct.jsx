import { useParams } from "@solidjs/router";
import { useAtom } from "solid-jotai";
import styles from "./TheProduct.module.css";
import data from "../../../data/db.json";
import { datastore } from "../../../data/DataStore";
import { createSignal } from "solid-js";

function TheProduct() {
  const params = useParams();
  const [click, setClick] = createSignal(1);
  const [datas, setData] = useAtom(datastore);

  function addProduct(id) {
    const selected = data.products.filter((product) => product.id === id);
    // -------------------------------------------------------------
    // Assuming only one product will have a unique ID
    const productToAdd = selected[0];

    setData((oldProductData) => [
      ...oldProductData,
      {
        title: productToAdd.title,
        id: productToAdd.id,
        img: productToAdd.img,
        price: productToAdd.price,
        number: click(),
      },
    ]);

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
                <button
                  onclick={() => {
                    addProduct(e.id);
                    setClick((prev) => prev + 1);
                  }}
                  class="btn"
                >
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
