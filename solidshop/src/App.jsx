import { Route, Router, A } from "@solidjs/router";

import Home from "./pages/Home/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Nav>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Nav>
  );
}

export default App;
