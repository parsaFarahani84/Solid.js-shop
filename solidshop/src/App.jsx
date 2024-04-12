import { Route, Router, A } from "@solidjs/router";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Nav>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    </Nav>
  );
}

export default App;
