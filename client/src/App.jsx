import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar"
import Week from "./components/Week"
import Inventory from "./components/Inventory"
import InventoryForm from './components/InventoryForm';
function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Week/>
     <Inventory/>
     <InventoryForm/>
  
    </div>
  );
}

export default App;
