import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SecondPage from './components/SecondPage';
import Summary from './components/Summary';
import Topbar from './components/Topbar';
import { UserContext } from './contexts/UserContext';
import { GlobalProvider } from './contexts/TransactionContext';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser,setLoggedUser] = useState({})
  
  return (
    <>
      <GlobalProvider>
      <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,loggedUser,setLoggedUser}}>
      <Router>
        <Topbar/>
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? <Redirect to="/home" /> : <LandingPage />}
            </Route>
            <Route exact path="/home">
              <Summary/>
            </Route>
            <Route>
              <SecondPage/>
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
      </GlobalProvider>
    </>
  );
}

export default App;
