import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./app.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a CellTECH 📱" />
    </div>
  );
}

export default App;
