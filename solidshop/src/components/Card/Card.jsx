import styles from "./Card.module.css";

function Card(props) {
  return (
    <div class={styles.mainCard}>
      <div class={styles.headerFlag}></div>

      <div class={styles.gapper}>
        <div>
          <div class={styles.imageContainer}>
            <img class={styles.img} src={props.img} />
          </div>
          <h1>{props.title}</h1>
          <p>{props.des}</p>
        </div>
        <div>
          <button class="btn">{props.btn}</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
