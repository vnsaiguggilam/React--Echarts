import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider } from '@material-ui/core';
import ScatterChart from './ScatterChart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function Line() {
    const classes = useStyles();
    return (
        <div>
            
            <Typography variant="h6" noWrap>
                Scatter Charts
            </Typography>
            <Divider />
            <br />

            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <ScatterChart />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        
                    </Paper>
                </Grid>
            </Grid>
            
            
            
        </div>
    )
}
