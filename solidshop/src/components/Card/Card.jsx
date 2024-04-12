import { A } from "@solidjs/router";
import styles from "./Card.module.css";

function Card(props) {
  function trimToWordLimit(text, limit) {
    // Split the text into an array of words
    const words = text.split(/\s+/);

    // Check if the word count is greater than the limit
    if (words.length > limit) {
      // Return the first 'limit' words joined together plus an ellipsis
      return words.slice(0, limit).join(" ") + "...";
    } else {
      // Return the original text if it's within the limit
      return text;
    }
  }
  return (
    <div class={styles.mainCard}>
      <div class={styles.headerFlag}></div>

      <div class={styles.gapper}>
        <div class={styles.container}>
          <div class={styles.imageContainer}>
            {props.img ? <img class={styles.img} src={props.img} /> : ""}
          </div>
          <h1>{trimToWordLimit(props.title, 8)}</h1>
          <p>{trimToWordLimit(props.des, 20)}</p>
        </div>
        <div>
          <A href={`/product/${props.id}`}>
            <button class="btn">{props.btn}</button>
          </A>
        </div>
      </div>
    </div>
  );
}

export default Card;
