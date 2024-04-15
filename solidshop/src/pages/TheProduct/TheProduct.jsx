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
    const selected = data.products.find((product) => product.id === id);
    if (!selected) return; // Exit if product is not found

    // Check if the product is already in the datas array
    const existingProductIndex = datas.findIndex(
      (product) => product.id === id
    );

    // If the product is already in the datas array, update its quantity
    if (existingProductIndex !== -1) {
      setData((oldProductData) => {
        const updatedProductData = [...oldProductData];
        updatedProductData[existingProductIndex].number += click();
        return updatedProductData;
      });
    } else {
      // If the product is not in the datas array, add it
      setData((oldProductData) => [
        ...oldProductData,
        {
          title: selected.title,
          id: selected.id,
          img: selected.img,
          price: selected.price,
          number: click(),
        },
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
