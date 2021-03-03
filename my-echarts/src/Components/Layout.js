import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core';
import Line from './LineCharts/Line';
import Bar from './BarCharts/Bar';
import Scatter from './ScatterCharts/Scatter';

export default class Layout extends Component {
    constructor() {
        super();
        this.state = {
            mode:1
        };
    }
    setMode(ind) {
        this.setState({ mode: ind });
    }
 
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Button variant="outlined"
                                color={this.state.mode===1?"primary":""}
                                onClick={this.setMode.bind(this, 1)}
                        >
                            Line Chart
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="outlined"
                                color={this.state.mode===2?"primary":""}
                                onClick={this.setMode.bind(this, 2)}
                        >
                            Bar Chart
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="outlined"
                                color={this.state.mode===3?"primary":""}
                                onClick={this.setMode.bind(this, 3)}
                        >
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
                {this.state.mode===1?
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Line />
                        </Grid>
                    </Grid>
                    :""
                }
                

                {this.state.mode===2?
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Bar />
                        </Grid>
                    </Grid>
                    :""
                }

                {this.state.mode===3?
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Scatter />
                        </Grid>
                    </Grid>
                    :""
                }
                

                
            </div>
        )
    }
}
