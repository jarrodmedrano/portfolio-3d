import React, {Component} from 'react';
import {Grid, Row} from 'react-flexbox-grid';

export class Main extends Component {
  render() {
    return (
      <Grid fluid className="wrapper">
        <Row style={{height: '100vh'}}  middle="xs" center="xs">
          {this.props.children}
        </Row>
      </Grid>
    )
  }
}

