import React, {Component, useReducer, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TableRegisterCurrentMonth from './TableRegisterCurrentMonth'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


function DashMediumComponet(title) {

  return(
    <Container maxWidth="xs">
      <Paper elevation={3} >
        <Typography variant="h6" align="center" component="h2" gutterBottom>
          teste
        </Typography>
          
      </Paper>
    </Container>
  )
}

export default DashMediumComponet;