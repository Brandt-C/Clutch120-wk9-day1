import { useContext, useEffect, useState } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { DataContext } from "../context/DataProvider";

const Shop = () => {
    useEffect(() => { console.log('SHOP component state has been rendered or re-rendered') });


    /*
    1. make api call to flask ---X
    2. set state for our component for products ---X
    2. get products from api call and set state ----X
    3. render on the page!
    */
    // async/await

    const getMovieData = async () => {
        let response = await axios.get('http://127.0.0.1:5000/api/movies');
        return response.status === 200 ? response.data : null
    }
    const loadMovieData = async () => {
        let data = await getMovieData();
        // console.log(data)
        setMovies(data.movies);
    }
    const [movies, setMovies] = useState(() => loadMovieData());
    // console.log(movies);

    const { cart, setCart } = useContext(DataContext);

    const addMovie = (movie) => {
        // make a copy
        let copyCart = { ...cart };
        // change the copy
        copyCart.size++;
        copyCart.total += parseInt(movie.price);
        copyCart.movies[movie.id] ?
            copyCart.movies[movie.id].quantity++
            :
            copyCart.movies[movie.id] = { data: movie, quantity: 1 };
        console.log(copyCart);
        // set state
        setCart(copyCart);
    }
    return (
        <div>
            <h1>Welcome to ClutchBusters Movie Store!</h1>
            <div className="container">
                <div className="row">
                    {console.log(movies, typeof movies)}
                    {movies && movies.length > 0 ? movies.map((m, index) => {
                        return <Card key={index} id={m.id} style={{ width: '13rem' }}>
                            <Card.Img variant="top" src={m.img_url} />
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                                <Card.Text>
                                    {m.desc}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Genre: {m.genre}</ListGroup.Item>
                                <ListGroup.Item>Length: {m.length}</ListGroup.Item>
                                <ListGroup.Item>Rating: {m.rating}</ListGroup.Item>
                                <ListGroup.Item>Price: ${m.price}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={m.trailer} target="_blank">Check out trailer!</Card.Link>
                            </Card.Body>
                            <Card.Body>
                                <Button variant="success" onClick={() => addMovie(m)}>Add to cart</Button>
                            </Card.Body>

                        </Card>
                    }) :
                        <Card>
                            <Card.Header>Quote</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        Good things come to those who wait. . .   LOADING{' '}
                                    </p>
                                    <footer className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Who knows?</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    }
                </div>
            </div>
        </div>
    )
}
export default Shop;



