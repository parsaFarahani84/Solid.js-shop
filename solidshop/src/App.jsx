import { Route, Router, A } from "@solidjs/router";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
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
