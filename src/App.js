import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from './components/Services/Services';
import About from './components/About/About';
import Teachers from './components/Teachers/Teachers';
import Contact from './components/Contact/Contact';
import Notfound from "./components/Notfounding/Notfound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path="/home"> <Home></Home> </Route>
      <Route exact path="/about"> <About></About> </Route>
      <Route exact path="/services"> <Services></Services> </Route>
      <Route exact path="/teachers"> <Teachers></Teachers> </Route>
      <Route exact path="/contact"> <Contact></Contact> </Route>
      <Route exact path='/'> <Home></Home> </Route>
      <Route> <Notfound></Notfound> </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
