import CounterComponent from "./components/CounterComponent";
import CounterClassComponent from "./components/CounterClassComponent";
import './index.css'

function App() {
  return (
    <div className="container">
    <h1>Hello From React-Redux practise</h1>
    <CounterComponent />
    <CounterClassComponent></CounterClassComponent>
    </div>);
}

export default App;
