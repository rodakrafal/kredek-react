import "./App.css";
import { NavBar, PizzaList } from "./components";

function App() {
  return (
    <div className="App" data-testid="test-app">
      <NavBar />
      <PizzaList />
    </div>
  );
}

export default App;
