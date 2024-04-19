import { useParams } from "@solidjs/router";
import styles from "./TheProduct.module.css";
import data from "../../../data/db.json";
import { createSignal } from "solid-js";
import { dataStore, setDataStore } from "../../store/dataStorage";
import { reredndering, setRerendering } from "../../store/dataStorage";

function TheProduct() {
  const params = useParams();

  const [numberOf, setNumberOf] = createSignal(0);

  function addProduct(id, number) {
    const selectedProduct = data.products.find((e) => e.id === id);
    const productIndex = dataStore.findIndex((e) => e.id === id);

    setNumberOf((e) => e + 1);
    // ---------------------------------
    setRerendering({
      ReLoad: true,
    });
    console.log(reredndering.ReLoad);
    // ---------------------------------

    if (productIndex !== -1) {
      setDataStore((prev) => {
        const updatedDatas = [...prev];
        console.log(updatedDatas[productIndex]);
        updatedDatas[productIndex].number += 1; // Increment number
        return updatedDatas;
      });
    } else {
      setDataStore((prev) => [
        ...prev,
        { ...selectedProduct, number: number + 1 },
      ]);
    }
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
                <button onclick={() => addProduct(e.id, e.number)} class="btn">
                  Order: {numberOf}
                </button>
              </div>
            </div>
          );
        } else {
          return null; // Return null instead of undefined
        }
      })}
    </div>
  );
}

export default TheProduct;
