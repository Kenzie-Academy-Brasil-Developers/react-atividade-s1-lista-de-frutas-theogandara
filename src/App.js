import { useState } from "react";
import "./App.css";
import "./style-fruits.css"

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits() {
    const redFruits = fruits.filter((item) => {
      return item.color === "red";
    });
    setFruits([...redFruits]);
  }


  const totalPrice = fruits.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return (
    <div className="App">
      <h3>O preço total é R${totalPrice},00</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} id={index}>
            {fruit.name}
          </li>
        ))}
      </ul>
      <button onClick={filterRedFruits}>filtrar</button>
    </div>
  );
}

export default App;
