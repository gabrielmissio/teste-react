import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    const axios = require('axios').default;
    var teste1 = 'https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/dev/register'
    axios.get(teste1)
    .then(resp => {
        console.log(resp.data);
        setSubmitting(false);
        
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
 }

  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
       <div>Submtting Form...</div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;