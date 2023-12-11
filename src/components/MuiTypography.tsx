import React from 'react'
import { Typography } from '@mui/material'

function MuiTypography() {
  return (
    <div>
    <Typography variant="h1" color="primary">Hello World </Typography>
    <Typography variant="h2" color="secondary">Hello World </Typography>
    <Typography variant="h3" color="error">Hello World </Typography>
    <Typography variant="h4" color="warning">Hello World </Typography>
    <Typography variant="body1" color="info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    <Typography variant="body2" color="success">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
    </div>
  )
}

export default MuiTypography