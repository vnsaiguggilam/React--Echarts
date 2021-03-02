import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core';
import Line from './LineCharts/Line';
import Scatter from './ScatterCharts/Scatter';

export default class Layout extends Component {
 
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Button variant="outlined" color="primary">
                            Line Chart
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="outlined" color="primary">
                            Bar Chart
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="outlined" color="primary">
                            Scatter Chart
                        </Button>   
                    </Grid>
                    {/* <Grid item xs>
                        <Button variant="outlined" color="primary">
                            Other Chart
                        </Button>
                    </Grid> */}
                    
                </Grid>

                <br /><br />
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Line />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs>
                        <Scatter />
                    </Grid>
                </Grid>
                

                
            </div>
        )
    }
}
