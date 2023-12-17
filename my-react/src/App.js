import { BrowserRouter, Route, Routes} from "react-router-dom";
import Task from "./components/Task";

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Task/>}/>
    </Routes>
    </BrowserRouter>
    )
 
}

export default App;
