import './App.css';
import { randColor, randInt } from './helpers/generators';
import Flake from "./flake/component"

function App() {
  return (
    <div className="App">
      <Flake 
        size={randInt(20, 40)} 
        color={randColor()}
        top={0}
        left={randInt(0, 100)}  
      />
    </div>
  );
}

export default App;
