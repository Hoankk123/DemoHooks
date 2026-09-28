import logo from './logo.svg';
import './App.css';
import Counter from './components/DemoState';
import Counter1 from './components/DemoClass';
import DemoRef from './components/DemoRef';
import DemoMemo from './components/DemoMemo';

function App() {
  return (
    <div className="App">
      <Counter/>
      <DemoRef/>
      <DemoMemo/>
      {/* <Counter1/> */}
    </div>
  );
}

export default App;
