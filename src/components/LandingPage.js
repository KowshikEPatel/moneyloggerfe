import React,{useState,useContext} from 'react';
import { Tabs,Tab,Card,Container,Form,Button,Row} from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { GlobalContext } from '../contexts/TransactionContext';
import axios from 'axios';


//const [message,setMessage] = useState({state:false,text:'',display:'none'})
export default function LandingPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    
    const usercontextdata = useContext(UserContext)
    const { addTransaction } = useContext(GlobalContext)

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    async function handleCreate(){
        
        let response = await axios({
            method:'post',
            url:'https://kp-expensetrackker.herokuapp.com/user/newuser',
            data:{
                username,
                email,
                password
            }
        })
        console.log(response)
    }
    
    async function handleSubmit(){
        
        let response = await axios({
            method:'post',
            url:'https://kp-expensetrackker.herokuapp.com/user',
            data:{
                username,
                password
            }
        })
        
        usercontextdata.setLoggedUser(response.data);
        response.data.user.transactions.map(e=>addTransaction(e)); 
        usercontextdata.setIsLoggedIn(true);
    }

    return (
        <>
            <Container style={{backgroundImage:'url(https://images.pexels.com/photos/5466793/pexels-photo-5466793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200)'}}>
                        <Row>
                        <Card style={{ width: '25rem',margin:"15px",padding:"0 7px 0 7px" }}>
                            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="login" title="Login">
                                    <Card.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label><Card.Title>Username</Card.Title></Form.Label>
                                                    <Form.Control type="text" placeholder="Your username..." onChange={handleUsername} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label><Card.Title>Password</Card.Title></Form.Label>
                                                    <Form.Control type="password" placeholder="Your password..." onChange={handlePassword}/>
                                                </Form.Group>
                                                <Button variant="primary" onClick={handleSubmit}>
                                                    Submit
                                                </Button>
                                            </Form>
                                    </Card.Body>
                                </Tab>
                                <Tab eventKey="register" title="Register">
                                    <Card.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicUsername">
                                                    <Form.Label><Card.Title>Username</Card.Title></Form.Label>
                                                    <Form.Control type="text" placeholder="Your Username..." onChange={handleUsername} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmailUserCreate">
                                                    <Form.Label><Card.Title>Email</Card.Title></Form.Label>
                                                    <Form.Control type="email" placeholder="Your Email..." onChange={handleEmail}/>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicPasswordUserCreate">
                                                    <Form.Label><Card.Title>Password</Card.Title></Form.Label>
                                                    <Form.Control type="password" placeholder="Your password..." onChange={handlePassword}/>
                                                </Form.Group>
                                                <Button variant="primary" onClick={handleCreate}>
                                                    Create Account
                                                </Button>
                                            </Form>
                                    </Card.Body>
                                </Tab>
                            </Tabs>
                        </Card>
                    </Row>
            </Container>    
        </>
    )
}
