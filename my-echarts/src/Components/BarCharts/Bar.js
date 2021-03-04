import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider } from '@material-ui/core';
import BarChart from './BarChart';
import BarChartBg from './BarChartBg';
import BarYCategory from './Bar-Y-Category';
import BarRaceAnimation from './BarRaceAnimation';

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

export default function Bar() {
    const classes = useStyles();
    return (
        <div>
            
            <Typography variant="h6" noWrap>
                Bar Charts
            </Typography>
            <Divider />
            <br />
            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <BarChart />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <BarChartBg />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                        <BarYCategory />
                    </Paper>
                </Grid>
                <Grid item  xs={6}>
                    <Paper className={classes.paper}>
                       <BarRaceAnimation />
                    </Paper>
                </Grid>
            </Grid>

            
            
        </div>
    )
}
