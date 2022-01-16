import logo from "./logo.svg";
import {Routes,Route} from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import About from "./pages/About";
import ReducerExample3 from "./Day3/ReducerExample3";
import Navbar1 from "./pages/Navbar1";
import Contact from "./pages/Contact";
import NoPageFound from "./pages/NoPageFound";
import {Provider} from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar1 />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="*" element={ <NoPageFound /> } />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
