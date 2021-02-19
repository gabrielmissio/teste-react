import React from 'react';

import axios from 'axios';

function Teste() {
    
    const axios = require('axios').default;
    var teste1 = 'https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/dev/register'
    var texto = 'um texto qualquer'
    axios.get(teste1)
    .then(resp => {
        console.log(resp.data);
        texto = resp.data;
        
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });

    return (
        <div className="App">
          <header className="App-header">
            <p>
              { texto }
            </p>
          
          </header>
        </div>
      );
    
}
  
  export default Teste;