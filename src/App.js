import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
// import LogoutButton from './components/Logout';
// import Home from './components/Home';
// import GetButton from "./components/GetButton"
import {useAuth0} from "@auth0/auth0-react";
import Hero from './components/Hero';


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
       <Route path = "/" />
     </Switch>
     <Hero />
     {/* <Home />
      <LogoutButton /> */}

    </Router>
  );
}

export default App;
