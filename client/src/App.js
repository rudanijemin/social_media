import Login from "./pages/login/Login"
import { Routes,Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import RequireUser from "./components/RequireUser";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={RequireUser}>
          <Route path="/login" element={<Login/>}/>
      </Route>


      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>



      
    </Routes>
    </div>
  );
}

export default App;
