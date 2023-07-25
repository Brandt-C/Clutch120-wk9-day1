import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";



const BsForm = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [text, setText] = useState('');
    let vals = {};


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        vals['email']= e.target[0].value;
        vals['pass'] = e.target[1].value;
        vals['text'] = e.target[2].value;
        console.log(vals);
        axios.post('http://127.0.0.1:5000/api/echoaxios', JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" }
        }
        )
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          fetch('http://127.0.0.1:5000/api/echofetch', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vals)
          })
        .then((res) => res.json())
        .then((data) => console.log(data))


    }

    return (
            <div className="container">
                <Form method="POST" className="col m-auto mt-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    {email ? <h3>Your email: {email}  --is this right?</h3>: null}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=> setPass(e.target.value)}/>
                    </Form.Group>
                    {pass ? <h3>Your password is on the page! - {pass}</h3>: null}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} value={text} onChange={(e)=> setText(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

    )
}

export default BsForm;