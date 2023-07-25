import './App.css';
import Background from './images/bg.png';
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ background: `url(${Background})` }}>
      {/* <Home/> */}
      <Login />
      {/* <Signup /> */}
      
    </div>
  );
}

export default App;
