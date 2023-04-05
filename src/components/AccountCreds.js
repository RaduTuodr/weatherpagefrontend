import * as React from 'react';
import { Card } from '@mui/material';
import { CardContent, Grid, TextField } from '@material-ui/core';

export default function AccountCredentialFields() {

  return (

      <Card>
        <CardContent>
          <Grid container spacing={1}>

            <Grid item>
              <TextField label="Username" placeholder="Username" variant='outlined' fullWidth/>
            </Grid>
          
            <Grid item>
             
              <TextField
                label="Password"
                type="password"
                autoComplete="current-password"
                variant='outlined'
              />
            </Grid>

          </Grid>
        </CardContent>
      </Card>

          // <TextField required id="outlined-required" label="Username" defaultValue=""/>
          // <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
        
  );
}