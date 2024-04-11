import Card from "./components/Card/Card";
import { createSignal } from "solid-js";
import "boxicons";

function App() {
  const [txt, setTxt] = createSignal("Welcome To Shop");
  const [dark, setDark] = createSignal(false);

  setTimeout(() => {
    setTxt("Let's Start");
  }, 1500);

  function changeMode() {
    setDark((preve) => !preve);
    console.log(dark());
  }

  return (
    <div className="containe">
      <span className="darkmode" onclick={changeMode}>
        {dark() ? (
          <box-icon name="moon" type="solid"></box-icon>
        ) : (
          <box-icon type="solid" name="sun"></box-icon>
        )}
        {dark() ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </span>
      <div class="banner">
        <h1>{txt()}</h1>
      </div>
      <div class="gridCard">
        <Card title="Less Price" />
        <Card title="Faster Shipping" />
        <Card title="Better Quality" />
      </div>
    </div>
  );
}

export default App;
