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
      <div>
      <h1>{singleJoke.setup}</h1>
      <p>{showPunchline && singleJoke.punchline}</p>
      </div>
      <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get Another Joke' : 'Get Punchline'}
      </Button>
    </div>
  );
}

export default App;
