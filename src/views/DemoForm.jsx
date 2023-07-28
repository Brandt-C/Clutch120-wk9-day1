import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";



const DemoForm = () => {

    const [uId, setUid] = useState('');
    const [text, setText] = useState('');
    let vals = {};
    const [posts, setPosts] = useState([]);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        vals['u_id']= e.target[0].value;
        vals['text'] = e.target[1].value;
        console.log(vals);
        axios.post('http://127.0.0.1:5000/api/getpostsbyuser', JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" }
        }
        )
        .then(function (response) {
            console.log(response);
            setPosts(response.data.data)
          })
          .catch(function (error) {
            console.log(error);
          });
        //   fetch('http://127.0.0.1:5000/api/echofetch', {
        //     method : 'POST',
        //     headers : {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(vals)
        //   })
        // .then((res) => res.json())
        // .then((data) => console.log(data))


    }

    return (
            <div className="container">
                <Form method="POST" className="col m-auto mt-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Type in the numeric id of the user whose posts you want to see:</Form.Label>
                        <Form.Control type="text" placeholder="Password" value={uId} onChange={(e)=> setUid(e.target.value)}/>
                    </Form.Group>
                    {uId ? <h3>User id - {uId}</h3>: null}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Type some things you want to say about this user's posts:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={text} onChange={(e)=> setText(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div>
                {posts? posts.map((p)=> {
                    return <>
                    <h4>{p.author}</h4>
                    <p>{p.body}</p>
                    </>
                }):
                null}
                </div>
            </div>

    )
}

export default DemoForm;