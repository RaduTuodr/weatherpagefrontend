import * as React from 'react';
import { Card } from '@mui/material';
import { Button, CardContent, Grid, TextField } from '@material-ui/core';

export default function AccountCredentialFields() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const handleClick=(e)=> {

    e.preventDefault()

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);

    if (name === "") {
      setNameError(true);
    }
    if (email === "" ) {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    const user={name, email, password}

    if (name != "" && password != "" && emailError == false) {
      fetch("http://localhost:8083/user", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(user)
      }).then(() => {
        console.log("New user")
      })
    } else {
      console.log("Invalid credentials");
    }
  }

  function validateEmail() {

    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-z]{2,3}$/;
    setEmailError(!email.match(pattern));
  }

  return (

    <Card style={{maxWidth:450, margin:'120px auto', padding:'20px 5px'}}>
      <CardContent>
        <form id = "form">

          <Grid container spacing={1}>

            <Grid item xs={12}>
              <TextField label="Username" placeholder="Username" variant='outlined' fullWidth required
              
              value = {name}
              onChange={(e)=>setName(e.target.value)}

              error={nameError}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField label="Email" placeholder="Email" variant='outlined' fullWidth required
              
              value = {email}
              onChange={(e)=>setEmail(e.target.value)}

              onKeyUp={(e)=>validateEmail()}

              error={emailError}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField id="emailTextField" label="Password" type="password" autoComplete="current-password" variant='outlined' fullWidth required
                         helperText="Do not share your password with anyone"

              value = {password}
              onChange={(e)=>setPassword(e.target.value)}

              error={passwordError}
              />
            </Grid>

            <Grid item xs={12}>

              <Button type='submit' variant='contained' color='tertiary' fullWidth onClick={handleClick}> Submit </Button>
            </Grid>
          </Grid>

        </form>

      </CardContent>
    </Card>
  );
}