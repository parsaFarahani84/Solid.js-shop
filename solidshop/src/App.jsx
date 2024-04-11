import { createSignal } from "solid-js";
import { Route, Router, A } from "@solidjs/router";
import "boxicons";
import Home from "./pages/Home/Home";

function App() {
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
          <A href="./">Home</A>
        </span>
        <span>
          <A href="./cart">Cart</A>
        </span>
      </nav>
      {/* -------------------------------------- */}
      <div class="banner">
        <h1>Welcome To Shop</h1>
      </div>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
