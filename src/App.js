import './App.css';
import NavBar from "./components/NavBar"
import 'bulma/css/bulma.min.css';
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
