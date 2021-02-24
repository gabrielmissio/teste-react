import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    alert('description: ' + event.target.description.value + '\nvalue: ' + event.target.value.value + '\ntype: '+ event.target.type.value + '\ntag_id: ' + event.target.tag_id.value)
    event.preventDefault();
    setSubmitting(true);
    const axios = require('axios').default;
    var teste1 = 'https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/dev/register'
    axios.get(teste1)
    .then(resp => {
        console.log(resp.data);
        //setSubmitting(false);
        
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>Spending Analyzer</h1>
      {submitting &&
       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Description</p>
            <input name="description" onChange={handleChange}/>
            <p>Value</p>
            <input name="value" onChange={handleChange}/>
            <p>Type</p>
            <input name="type" onChange={handleChange}/>
            <p>Tag Id</p>
            <input name="tag_id" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;