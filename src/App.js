import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data";

function App() {
  const cards = data.map(item=> {
    return (
      <Card
      {...item}
       />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className="cards--list">
        {cards}
      </div>
    </div>
  );
}

export default App;
