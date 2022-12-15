import { Button, Col, Form } from "react-bootstrap"
import { useState } from "react";
import { registartion } from "../actions/user";
import "./LoginAndRegister.css";


function RegistrationForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return <Col className="mt-5 text-center" lg={6} md={8} sm={10} xs={10}>
        <h4>Create account</h4>
        <Form.Group>
                    <Form.Control value={email} onChange={(event)=>setEmail(event.target.value)} type="text" placeholder="Enter email" />
                    <Form.Control className="mt-3" value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter login" />
                    <Form.Control className="mt-3" value={password} onChange={(event)=>setPassword(event.target.value)} type="text" placeholder="Enter password" />
                    <Button variant="secondary" size="lg" className="mt-4" onClick={()=>registartion(email, name, password)}>Save</Button>
                </Form.Group>

            </Col>
}

export default RegistrationForm;