import React from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
   <Box
   component={'section'}
   sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
   }}
   >
    <Button variant='contained' color='primary' startIcon={<GoogleIcon />}>Login with Google</Button>
   </Box>
  )
}

export default Login