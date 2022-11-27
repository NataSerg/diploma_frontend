import { Button, Col, Form } from "react-bootstrap"
import { useEffect, useRef, useState } from "react"
import { Navigate } from "react-router-dom";


function Profile({user, setUser}) {

    const loginRef = useRef(null);
    const emailRef = useRef(null);
    const ageRef = useRef(null);
    const [flag, setFlag] = useState(false);


    
    function saveLogin() {
        const newLogin = {
            login: loginRef.current.value,
            email: emailRef.current.value,
            age: ageRef.current.value,
        }
        setUser(newLogin);
        setFlag(true);
        console.log(user);

    }

    return <Col xs="12">
    <Form.Group>
    <Form.Label className="mt-3">Login</Form.Label>
    <Form.Control defaultValue={user?.login} type="text" ref={loginRef} placeholder="Enter login" />
    <Form.Label className="mt-3">Email</Form.Label>
    <Form.Control defaultValue={user?.email} type="email" ref={emailRef} placeholder="Enter email" />
    <Form.Label className="mt-3">Age</Form.Label>
    <Form.Control defaultValue={user?.age} type="number" ref={ageRef} placeholder="Enter age" />
    <Button variant="primary" size="lg" className="mt-4" onClick={saveLogin}>Save</Button>
   
        </Form.Group>
            {flag ? <Navigate to="/products" /> : ''}    

    </Col>
}

export default Profile;