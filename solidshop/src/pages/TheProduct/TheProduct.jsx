import { useParams } from "@solidjs/router";
import { useAtom } from "solid-jotai";
import styles from "./TheProduct.module.css";
import data from "../../../data/db.json";
import { datastore } from "../../../data/DataStore";
import { createSignal } from "solid-js";

function TheProduct() {
  const params = useParams();
  const [datas, setData] = useAtom(datastore);

  function addProduct() {
    console.log("lalal");
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
