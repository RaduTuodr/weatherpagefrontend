import * as React from 'react';
import { Card } from '@mui/material';
import { Button, CardContent, Grid, TextField } from '@material-ui/core';

export default function AccountCredentialFields() {

  return (

    <Card style={{maxWidth:450, margin:'120px auto', padding:'20px 5px'}}>
      <CardContent>
        <form>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField label="Username" placeholder="Username" variant='outlined' fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TextField label="Password" type="password" autoComplete="current-password" variant='outlined'fullWidth />
            </Grid>

            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary' fullWidth> Submit </Button>
            </Grid>
          </Grid>

        </form>

      </CardContent>
    </Card>

    // <TextField required id="outlined-required" label="Username" defaultValue=""/>
    // <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>

  );
}