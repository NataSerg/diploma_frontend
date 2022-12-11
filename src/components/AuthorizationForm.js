import { Button, Col, Form } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { login } from "../actions/user";
import { useDispatch } from "react-redux";

function AuthorizationForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    

    return <Col xs="12">
        <Form.Group>
            <Form.Label className="mt-3">Email</Form.Label>
            <Form.Control value={email} onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email" />
                    
            <Form.Label className="mt-3">Password</Form.Label>
            <Form.Control value={password} onChange={(event)=>setPassword(event.target.value)} type="text" placeholder="Enter password" />
            
            <Button variant="secondary" size="lg" className="mt-4" onClick={()=>dispatch(login(email, password))}>Login</Button>
        </Form.Group>
    </Col>
}

export default AuthorizationForm;