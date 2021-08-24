import React,{useState,useContext} from 'react';
import { Tabs,Tab,Card,Container,Form,Button } from 'react-bootstrap';
import {UserContext} from '../contexts/UserContext';
import axios from 'axios'

//const [message,setMessage] = useState({state:false,text:'',display:'none'})
export default function LandingPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    const usercontextdata = useContext(UserContext)

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    
    async function handleSubmit(){
        let response = await axios({
            method:'post',
            url:'https://kp-expensetrackker.herokuapp.com/',
            data:{
                username,
                password
            }
        })
        usercontextdata.setLoggedUser(response.data);
        usercontextdata.setIsLoggedIn(true);
    }
    return (
        <>
            <Container>
                <Card style={{ width: '25rem' }}>
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="login" title="Login">
                            <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label><Card.Title>Username</Card.Title></Form.Label>
                                            <Form.Control type="text" placeholder="Your username..." onChange={handleUsername} />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label><Card.Title>Password</Card.Title></Form.Label>
                                            <Form.Control type="password" placeholder="Your password..." onChange={handlePassword}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group>
                                        <Button variant="primary" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Form>
                            </Card.Body>
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Tab>
                    </Tabs>
                </Card>
            </Container>
            
             
        </>
    )
}
