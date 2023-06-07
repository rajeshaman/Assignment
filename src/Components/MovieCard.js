import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//props -> movie


const MovieCard = (props) => {
    const { movie } = props
    console.log("MovieCard Component:-", movie);

    const navigate = useNavigate()

    function handleClick() {
        // redirect 
        //  and pass the movie
        let movieId = movie.show.id
        navigate(`/bookmovie/${movieId}`, { state: { movie } })
    }


    return (
        <>
            <Card style={{ width: '18rem',borderRadius:"10px"}}>
                <Card.Img variant="top" src={movie.show.image.original} />
                <Card.Body>
                    <Card.Title className="cardTitle">{movie.show.name}</Card.Title>
                    <Card.Text className="cardtext">
                        Language: {movie.show.language}
                        <br />
                        Genres: {movie.show.genres}
                        <br />
                        Rating: {movie.show.rating.average}
                        <br />
                        Status:{movie.show.status}
                       
                    </Card.Text>
                    <Button variant="danger"
                        onClick={handleClick}
                    className="btn">Show More</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard;