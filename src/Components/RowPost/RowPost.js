import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constants';
import YouTube from 'react-youtube';

function RowPost(props) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    });
  }, [props.url]);

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key);
      }
    });
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <img
            onClick={() => handleMovie(movie.id)}
            key={movie.id}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            alt='poster'
            src={`${imageUrl}${movie.backdrop_path}`}
          />
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;
