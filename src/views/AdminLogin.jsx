import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";



const AdminLogin = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [check, setCheck] = useState('');




    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let vals = {};
        vals['username']= e.target[0].value;
        vals['pass'] = e.target[1].value;
        console.log(vals);
        // axios.post('http://127.0.0.1:5000/api/adminlogin', JSON.stringify(vals), {
        //     headers: { "Content-Type": "application/json" }
        // }
        // )
        // .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        fetch('http://127.0.0.1:5000/api/token', {
            method : 'POST',
            headers : {
                Authorization : `Bearer ${btoa(e.target[0].value + ":" + e.target[1].value)}`
            },
            body: JSON.stringify(vals)
          })
        .then((res) => res.json())
        .then((data) => setToken(data.token))
    }

    const checkToken = async () => {
        fetch('http://127.0.0.1:5000/api/token-check', {
            method : 'POST',
            headers : {
                Authorization : `Bearer ${token}`
            }
          })
        .then((res) => res.json())
        .then((data) => setCheck(data.message))
    }

    return (
            <div className="container">
                <Form method="POST" className="col m-auto mt-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" placeholder="Username . . . " value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password . . . " value={password} onChange={(e)=> setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                {token? 
                <>
                <Button variant="warning" onClick={checkToken}>check token!</Button>
                <p>{token}</p>
                </>:null}
                    {check? <h2>{check}</h2>:null}



            </div>

    )
}

export default AdminLogin;