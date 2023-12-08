import './App.css';
import { randColor, randInt } from './helpers/generators';
import Flake from "./flake/component"
import { useState } from 'react';

function App() {

  let [showChild, setShowChild] = useState(true) 

  return (
    <div className="App">
      { showChild &&
        <Flake 
        size={randInt(20, 40)} 
        color={randColor()}
        top={0}
        left={randInt(0, 100)}  
        whenDone = {() => {setShowChild(false)}}
      />
      }
    </div>
  );
}

export default App;
