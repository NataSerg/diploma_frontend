import { Button, Col, Form } from "react-bootstrap"
import { useState } from "react";
import { registartion } from "../actions/user";


function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    
    
    

    return <Col xs="12">
        <Form.Group>
                    <Form.Label className="mt-3">Email</Form.Label>
                    <Form.Control value={email} onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email" />
                    <Form.Label className="mt-3">Login</Form.Label>
                    <Form.Control value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter login" />
                    <Form.Label className="mt-3">Password</Form.Label>
                    <Form.Control value={password} onChange={(event)=>setPassword(event.target.value)} type="text" placeholder="Enter password" />
            
                    <Button variant="secondary" size="lg" className="mt-4" onClick={()=>registartion(email, name, password)}>Save</Button>
                </Form.Group>

            </Col>
}

export default RegistrationForm;