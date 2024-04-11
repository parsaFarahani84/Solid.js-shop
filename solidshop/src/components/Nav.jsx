import { createSignal } from "solid-js";
import "boxicons";
// import { A } from "@solidjs/router";

function Nav(props) {
  const [dark, setDark] = createSignal(true);

  function changeMode() {
    setDark((preve) => !preve);
    console.log(dark());
  }

  return (
    <div className={`containe ${dark() ? "dark" : ""}`}>
      {/* -------------------------------------- */}
      <nav>
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
        <span>
          <a href="./" class={dark() ? "light" : ""}>
            Home
          </a>
        </span>
        <span>
          <a href="./cart" class={dark() ? "light" : ""}>
            Cart
          </a>
        </span>
      </nav>
      {/* -------------------------------------- */}
      <div class="banner">
        <h1>Welcome To Shop</h1>
      </div>
      {props.children}
    </div>
  );
}

export default Nav;
