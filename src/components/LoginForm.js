import { Button, Col, Form } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import axios from "axios";
import { login } from "../actions/user";
import { useDispatch } from "react-redux";
import "./LoginAndRegister.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return <Col className="mt-5 text-center" lg={6} md={8} sm={10} xs={10}>
        <h4>Log in</h4>
        <Form.Group>
            <Form.Control value={email} onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email" />                    
            <Form.Control className="mt-3" value={password} onChange={(event)=>setPassword(event.target.value)} type="text" placeholder="Enter password" />
            <Button variant="secondary" size="lg" className="mt-4" onClick={()=>dispatch(login(email, password))}>Log in</Button>
        </Form.Group>
    </Col>
}

export default LoginForm;