import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"
import FixedComponent from "./FixedComp"
import Dog from "./Dog"


function App() {
  return (
    <div className="App">
      <h1>Hello, I'm an app!</h1>
      <Counter />
      <FixedComponent />
      <Dog />
    </div>
  );
}

export default App;
