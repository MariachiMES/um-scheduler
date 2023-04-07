import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Week from './components/Week';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <Week/>
    </div>
  );
}

export default App;
