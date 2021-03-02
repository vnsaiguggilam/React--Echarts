import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider } from '@material-ui/core';
import LineChart from './LineChart';
import SmothLineChart from  './SmothLineChart';
import LineAreaChart from './LineAreaChart';
import SmothLineAreaChart from './SmothLineAreaChart';
import StackedLineChart from './StackedLineChart';
import SmothStackedLineChart from './SmothStackedLineChart';
import StackedLineAreaChart from './StackedLineAreaChart';
import SmothStackedLineAreaChart  from './SmothStackedLineAreaChart';

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
                Line Charts
            </Typography>
            <Divider />
            <br />

            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <LineChart />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <SmothLineChart />
                    </Paper>
                </Grid>
            </Grid>
            
            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <LineAreaChart />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <SmothLineAreaChart />
                    </Paper>
                </Grid>
            </Grid>
            
            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <StackedLineChart />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <SmothStackedLineChart />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <StackedLineAreaChart />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <SmothStackedLineAreaChart />
                    </Paper>
                </Grid>
            </Grid>
            
        </div>
    )
}
