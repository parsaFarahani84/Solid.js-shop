import Card from "./components/Card/Card";

function App() {
  return (
    <div className="container m-auto">
      <div class="banner">
        <h1>Welcome To Shop</h1>
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
