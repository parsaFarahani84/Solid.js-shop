import { useParams } from "@solidjs/router";
import data from "../../../data/db.json";
import { useAtom, atom, useSetAtom } from "solid-jotai";
import styles from "./TheProduct.module.css";
import { countAtom } from "../Cart/Cart";

function TheProduct() {
  const params = useParams();
  const [productData, setProductData] = useAtom(countAtom);

  function addProduct(id) {
    const selected = data.products.filter((e) => e.id === id);
    selected.map((e) => {
      setProductData((data) => [
        {
          title: e.title,
          id: e.id,
        },
        // ...data,
      ]);

      // setProductData((data) => console.log(...data));
    });
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
