import React,{useState} from 'react';
import { Navbar,Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SecondPage from './components/SecondPage';
import Summary from './components/Summary'
import { UserContext } from './contexts/UserContext';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser,setLoggedUser] = useState({})
  const [loggedUserUrls,setLoggedUserUrls] = useState({})

  return (
    <>
      <UserContext.Provider value={{isLoggedIn,setIsLoggedIn,loggedUser,setLoggedUser,loggedUserUrls,setLoggedUserUrls}}>
      <Navbar bg="primary" variant="dark">
          <Container>
              <Navbar.Brand >Moneylogger</Navbar.Brand>
          </Container>
      </Navbar>
      <Router>
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
    </>
  );
}

export default App;
