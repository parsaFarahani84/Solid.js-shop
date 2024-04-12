import { Route, Router } from "@solidjs/router";

import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import TheProduct from "./pages/TheProduct/TheProduct";

function App() {
  return (
    <Nav>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={TheProduct} />
      </Router>
    </Nav>
  );
}

export default App;
