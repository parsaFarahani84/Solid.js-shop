import { useParams } from "@solidjs/router";
import { useAtom } from "solid-jotai";
import styles from "./TheProduct.module.css";
import { clicked } from "../Cart/Cart";
import data from "../../../data/db.json";

function TheProduct() {
  const params = useParams();
  const [datas, setData] = useAtom(clicked);

  const clickedFunc = function (id) {
    // console.log(id);
    return setData(id);
  };

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
                <button onclick={() => clickedFunc(e.id)} class="btn">
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
