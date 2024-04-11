import { createSignal } from "solid-js";
import { Route, Router } from "@solidjs/router";
import "boxicons";
import Home from "./pages/Home";

function App() {
  const [dark, setDark] = createSignal(false);

  function changeMode() {
    setDark((preve) => !preve);
    console.log(dark());
  }

  return (
    <div className={`containe ${dark() ? "dark" : ""}`}>
      <span
        className={`darkmode ${dark() ? "light" : ""}`}
        onclick={changeMode}
      >
        {dark() ? (
          <box-icon name="moon" type="solid" color="#fff"></box-icon>
        ) : (
          <box-icon type="solid" name="sun"></box-icon>
        )}
        {dark() ? <p>Dark Mode</p> : <p>Light Mode</p>}
      </span>
      <div class="banner">
        <h1>Welcome To Shop</h1>
      </div>

      {/* <Route path="/" component={Home} /> */}
    </div>
  );
}

export default App;
