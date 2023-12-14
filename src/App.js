import './App.css';
import Snow from './snow-effect/snow/component'

function App() {

  // let [showChild, setShowChild] = useState(true) 

  return (
    <div className="App">

      <Snow qty={5} />

      {/* { showChild &&
        <Flake 
        size={randInt(20, 40)} 
        color={randColor()}
        top={0}
        left={randInt(0, 100)}  
        whenDone = {() => {setShowChild(false)}}
      />
      } */}
    </div>
  );
}

export default App;
