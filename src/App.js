import {BrowserRouter, Routes, Route} from "react-router-dom"
import Asad from "./Asad/Asad";
import Yusuf from "./Yusuf/Yusuf";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Yusuf />
      <Asad />
    
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
