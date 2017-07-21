import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Home, Contact, Navigator, Main, Missed, Success} from './index';
import AnimatedSwitch from './AnimatedSwitch';
import TransitionGroup from "react-transition-group/TransitionGroup";

export class RouteContainer extends Component {
  render() {
    return (
      <div>
        <Navigator />
        <Route render={({location, history}) => (
          <div>
            <TransitionGroup
              component={Main}
              className="transition-container"
            >
              <AnimatedSwitch
                key={location.key}
                location={location}
              >
                <Route exact path="/" component={Home}/>
                <Route exact path="./" component={Home}/>
                <Route
                  exact
                  path="/contact"
                  render={props => (
                    <Contact {...props} />
                  )}
                />
                <Route
                  exact
                  path="/success"
                  render={props => (
                    <Success {...props} />
                  )}
                />
                <Route component={Missed}/>
              </AnimatedSwitch>
            </TransitionGroup>
          </div>
        )}
        />
      </div>
    )
  }
};