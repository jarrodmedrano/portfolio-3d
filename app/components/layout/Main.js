import React, {Component} from 'react';
import {Grid, Row} from 'react-flexbox-grid';

export class Main extends Component {
  render() {
    return (
      <Grid fluid className="wrapper">
          {this.props.children}
      </Grid>
    )
  }
}

