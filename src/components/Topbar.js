import React,{useContext} from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import {GlobalContext} from '../contexts/TransactionContext';

export default function Topbar() {
    
    const { deleteAllTransaction } = useContext(GlobalContext)
    const {isLoggedIn,setIsLoggedIn,setLoggedUser} = useContext(UserContext)

    function logOut(){
        setIsLoggedIn(false);
        setLoggedUser({});
        deleteAllTransaction()
    }

    return (
        <>
           <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand >Moneylogger</Navbar.Brand>
                    {isLoggedIn?<>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/report">Report</Link>
                        <Link to="/" className="btn btn-light" onClick={logOut}>Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                    </>
                    :<>
                    </>}
                </Container>
            </Navbar> 
        </>
    )
}
