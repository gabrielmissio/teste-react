import React, {Component, useReducer, useState } from 'react';
import AsyncSelect from 'react-select/async';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const formReducer = (state, event) => {
  return {
   ...state,
   [event.name]: event.value
 }
}

var valueTeste = []

async function getOptions(){
  var axios = require('axios');
  const res = await axios.get('https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/hml/tag')
  const data = res.data

  const options = data.tags.map(d => ({
    "value" : d.id,
    "label" : d.name
  }))
  return options
}


function FormRegister() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    const tags = valueTeste.map(d => ({
      "tag" : d.value
    }))
    //tags.map(v => console.log(v.tag))
    
    var description = event.target.description.value
    var value = event.target.value.value
    var type = event.target.type.value
    event.preventDefault();
    setSubmitting(true);
    var axios = require('axios');
    var data = JSON.stringify({"description":description,"value":value,"type":type,"tags":tags});
    
    var config = {
      method: 'post',
      url: 'https://oumbd5l1x3.execute-api.us-east-1.amazonaws.com/hml/register',
      headers: { 
        'Authorization': 'Bearer eyJraWQiOiJzbmEyYmFlNGtMbnhpODdPOU5nRDlkd3NzOWRJN2lPNExzQUd3c0lCa1cwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1NWMyMzQ2NC1mZWIxLTRkOWItYmViOC0yYzQ3YmEwMTFkNDQiLCJjb2duaXRvOmdyb3VwcyI6WyJsdWNraWUtdGVjaCJdLCJldmVudF9pZCI6IjI1MGM5OThhLTIwYTMtNDc0Zi1hNGNmLThjNjQ4N2ZiYThmYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTM3NjcxMTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1hwUGtubkpzciIsImV4cCI6MTYxMzc3MDcxMiwiaWF0IjoxNjEzNzY3MTEyLCJqdGkiOiJiMGVjOWE4OC1hZmEzLTQ1MTQtOWEyYS04NjUxYTM5NmZhY2MiLCJjbGllbnRfaWQiOiI3MTNqcGgwZWxnc291ZTltY211M2xnY2o1aSIsInVzZXJuYW1lIjoidGhpYWdvLm0ifQ.LNtqXXWxyIDkQEKktocWTNj-raVOVsbK71m8J4_Ijy06_eD9CzYxqa4S7rhRaew-6Ql5NPH4gIDOfUHtkd42ttCZOuiphk8AtetpLuWuwB_M-3QWo68YWevW-X1hgn_fx9AXt9B8kz2FDbN6g2gylQ8jrEPdaB-tnnR5PkcXTZB7pKLz8moX_qB2Sfe8OTMey6abV1nEzrQ9CqPWPMklrR_CsEa2G4OZZdRO9orPRa9E5tmxXdaSH7hzR6cH6lSe4yb3ACJ-AxLB-ZsUpbkV0oLNmP3sDk3gB_uWO2TYpuZ-7FFqUYqZRzeYW1-SYvL7WCPQJHxQMDXzCA_sG4eqeA', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  
  const handleChangeCombo = (e) => {
    var a = {value:e}
    var b = a.value
    //alert(b)
    valueTeste = b
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return(
    <div style={{ padding: 80, margin: 'auto', maxWidth: 500 }}>
        <Typography variant="h5" align="center" component="h2" gutterBottom>
        CASH FLOW
        </Typography>
        <form onSubmit={handleSubmit}>
        <Paper style={{ padding: 26 }} elevation={3}>
          <Grid container direction="column" justify="space-between" alignItems="flex-start" spacing={4}>
            <Grid container item xs={12}>
                <TextField fullWidth name="description" label="Description" onChange={handleChange}/>
            </Grid>
            <Grid container item xs={12}>
                <TextField fullWidth name="value" label="Value"  onChange={handleChange}/>
            </Grid>
            <Grid container item xs={12}>
                <TextField fullWidth name="type" label="Type"  onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Grid item xs={12}> 
            <AsyncSelect cacheOptions defaultOptions loadOptions={getOptions} onChange={handleChangeCombo} isMulti/>
          </Grid>
          <br/>
          <br/>
          <Button fullWidth variant="contained" type="submit">Submit</Button>
        </Paper>
      </form>        
    </div>
  )
}

export default FormRegister;