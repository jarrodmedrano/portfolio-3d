import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Home, Contact, Navigator, Main, Missed} from './index';
import AnimatedSwitch from './AnimatedSwitch';
import * as Animated from "animated/lib/targets/react-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export class RouteContainer extends Component {
  constructor(props) {
    super(props);

    this.currentPage = location.pathname;

    this.pages = {
      '/': 0,
      '/contact': 1
    }
  }

  getDirection() {
    let nextPage = location.pathname;
    let nextPageIndex = this.pages[nextPage];
    let currentPageIndex = this.pages[this.currentPage];

    this.currentPage = location.pathname;

    if (currentPageIndex < nextPageIndex) {
      return 'rtl'
    } else if (currentPageIndex > nextPageIndex) {
      return 'ltr'
    }

    return null;
  }

  getAnimation() {
    let direction = this.getDirection();
    let calculatedAnimations = {};
    let animationPrefix = 'navigation';

    if (direction === 'rtl') {
      calculatedAnimations.enter = `${animationPrefix}-enter-rtl`;
      calculatedAnimations.enterActive = `${animationPrefix}-enter-active`;
      calculatedAnimations.leave = `${animationPrefix}-leave-rtl`;
      calculatedAnimations.leaveActive = `${animationPrefix}-leave-active`;
    } else if (direction === 'ltr') {
      calculatedAnimations.enter = `${animationPrefix}-enter-ltr`;
      calculatedAnimations.enterActive = `${animationPrefix}-enter-active`;
      calculatedAnimations.leave = `${animationPrefix}-leave-ltr`;
      calculatedAnimations.leaveActive = `${animationPrefix}-leave-active`;
    } else {
      calculatedAnimations.enter = `${animationPrefix}-enter-fade`;
      calculatedAnimations.enterActive = `${animationPrefix}-enter-active`;
      calculatedAnimations.leave = `${animationPrefix}-leave-fade`;
      calculatedAnimations.leaveActive = `${animationPrefix}-leave-active`;
    }

    return calculatedAnimations;
  }

  getAnimationSpeed() {
    let direction = this.getDirection();

    /*
     * Time values must be equal to $naviagtion-animation-time-cross-page and $naviagtion-animation-time-current-page @ variables.scss
     */
    const activePageAnimationSpeed = 600;
    const crossPageAnimationSpeed = 300;

    if (direction === null) {
      return activePageAnimationSpeed
    }

    return crossPageAnimationSpeed;
  }

  render() {
    return (
      <div>
        <Navigator />
        <Route render={({location}) => (
          <div>
            <TransitionGroup
              component={Main}
              className="transition-container"
              transitionName={this.getAnimation()}
              transitionEnterTimeout={this.getAnimationSpeed()}
              transitionLeaveTimeout={this.getAnimationSpeed()}
            >
              <AnimatedSwitch
                key={location.key}
                location={location}
              >
                <Route exact path="/" component={Home}/>
                <Route
                  exact
                  path="/contact"
                  render={props => (
                    <Contact {...props} />
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
}

