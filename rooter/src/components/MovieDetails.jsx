import React from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieDetails(props) {
  const { data } = props;
  const { id } = useParams();
  const movie = data && data.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div className="centered-container">
        <Link to="/"className='back'>Back to Home</Link>
        <p >Movie not found</p>
      </div>
    );
  }

  return (
    <div className="centered-container">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="video-container">

      <iframe
        width="560"
        height="315"
        src={`${movie.video}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
</div>
      <Link to="/" className='back'>Back to Home</Link>
    </div>
  );
}

export default MovieDetails;
