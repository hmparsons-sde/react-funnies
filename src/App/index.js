import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import './App.scss';
import getJokes from '../helpers/data/jokeData';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const handleClick = () => {
    if (showPunchline) {
      setShowPunchline(false);
      setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    } else {
      setShowPunchline(true);
    }
  };

  useEffect(() => {
    getJokes()
      .then((jokes) => {
        setAllJokes(jokes);
        setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
      });
  }, []);

  return (
    <div className='App'>
      <h1>{singleJoke.jokes}</h1>
      <p>{showPunchline && singleJoke.correctPunchline}</p>
      <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get Another Joke' : 'Get Punchline'}
      </Button>
    </div>
  );
}

export default App;
