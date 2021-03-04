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


function NotFound() {

  return(
    <div style={{ padding: 80, margin: 'auto', maxWidth: 500 }}>
        <Typography variant="h5" align="center" component="h2" gutterBottom>
        404 Not Found
        </Typography>
    </div>
  )
}

export default NotFound;