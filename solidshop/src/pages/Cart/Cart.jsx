import Card from "../../components/Card/Card";

function Cart(props) {
  return (
    <div class="shopingCart">
      <Card title="This Is Your Card" des="Nothing Here Yet" btn="Buy">
        {props.children}
      </Card>
    </div>
  );
}

export default Cart;
