import './App.css';
import axios from 'axios';
import Home from './Home';
import background from "./imgs/Vector 1.png"
import Mob from './Mob';

function App() {
  return (
    <>
    <div className="App"
    style={{
      backgroundImage: `${background}`,
            }}>
    <Home />]
    <Mob />
    </div>
    </>
  );
}

export default App;
