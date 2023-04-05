import * as React from 'react';
import { Card } from '@mui/material';
import { Button, CardContent, Grid, TextField } from '@material-ui/core';

export default function AccountCredentialFields() {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleClick=(e)=> {

    e.preventDefault()
    const weather={name, description}
    console.log(weather)

    fetch("http://localhost:8083/weather", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(weather)
    }).then(() => {
      console.log("New weather")
    })
  }

  return (

    <Card style={{maxWidth:450, margin:'120px auto', padding:'20px 5px'}}>
      <CardContent>
        <form>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField label="Username" placeholder="Username" variant='outlined' fullWidth 
              
              value = {name}
              onChange={(e)=>setName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField label="Password" type="password" autoComplete="current-password" variant='outlined'fullWidth
            
              value = {description}
              onChange={(e)=>setDescription(e.target.value)}
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