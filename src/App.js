import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
// import LogoutButton from './components/Logout';
// import Home from './components/Home';
// import GetButton from "./components/GetButton"
import {useAuth0} from "@auth0/auth0-react";
import Hero from './components/Hero';
import Colelctions from './components/Colelctions';
import Main from './components/Main';


function App() {
  const {isLoading} = useAuth0();

  if(isLoading){
    return(
      <div>
        Loadingg.....
      </div>
    )
  }
  return (
    <Router>
     
      <Navbar />
     <Switch>
       <Route exact path = "/" component={Main}/>
     </Switch>

     <Switch>
       <Route  path = "/Hero"  component={Hero} />
     </Switch>
     
     {/* <Home />
      <LogoutButton /> */}

     <Switch>
       <Route path = "/collections" component={Colelctions} />
     </Switch>

    </Router>
  );
}

export default App;
