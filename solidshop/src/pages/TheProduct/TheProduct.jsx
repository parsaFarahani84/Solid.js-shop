import { useParams } from "@solidjs/router";
import data from "../../../data/db.json";
import styles from "./TheProduct.module.css";

function TheProduct() {
  const params = useParams();
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
                <button class="btn">Order</button>
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
