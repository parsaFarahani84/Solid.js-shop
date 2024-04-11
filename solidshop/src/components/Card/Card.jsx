import styles from "./Card.module.css";

function Card(props) {
  return (
    <div class={styles.mainCard}>
      <div class={styles.headerFlag}></div>
      <div class={styles.gapper}>
        <h1>{props.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde velit
          quaerat temporibus dolorem, sapiente nobis, odio ducimus sed dolor
          voluptates iste consequatur. Vitae ipsum dicta alias minus aspernatur
          autem similique!
        </p>
        <div>
          <button class="btn">See More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
