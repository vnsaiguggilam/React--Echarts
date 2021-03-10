import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider } from '@material-ui/core';
import ClockChart from './ClockChart'

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

export default function Clock() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h6" noWrap>
                Clock Chart
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={3}>
                <Grid item  xs={3}/>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <ClockChart />
                    </Paper>
                </Grid>
                <Grid item  xs={3}/>
            </Grid>

        </div>
    )
}
