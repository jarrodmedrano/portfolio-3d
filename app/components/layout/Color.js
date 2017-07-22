import React, {Component} from 'react';

export class Color extends Component {

  constructor(props) {
    super(props);
    const colors = [
      [62, 35, 255],
      [60, 255, 60],
      [255, 35, 98],
      [45, 175, 230],
      [255, 0, 255],
      [255, 128, 0]
    ];

    this.state = {
      colors: colors,
      step: 0,
//color table indices for:
// current color left
// next color left
// current color right
// next color right
      colorIndices: [0, 1, 2, 3],
//transition speed
      gradientSpeed: 0.002,
      gradient: "-webkit-gradient(linear, left top, right top, from(rgb(62, 35, 255)), to(rgb(60, 255, 60))"
    }

    this.updateGradient = this.updateGradient.bind(this);
  }

  updateGradient() {

    let c0_0 = this.state.colors[this.state.colorIndices[0]];
    let c0_1 = this.state.colors[this.state.colorIndices[1]];
    let c1_0 = this.state.colors[this.state.colorIndices[2]];
    let c1_1 = this.state.colors[this.state.colorIndices[3]];

    let istep = 1 - this.state.step;
    let r1 = Math.round(istep * c0_0[0] + this.state.step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + this.state.step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + this.state.step * c0_1[2]);
    let color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    let r2 = Math.round(istep * c1_0[0] + this.state.step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + this.state.step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + this.state.step * c1_1[2]);
    let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    this.setState({
      gradient: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }, this.setState({
      gradient: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    }));

    this.state.step += this.state.gradientSpeed;
    if (this.state.step >= 1) {
      this.state.step %= 1;
      this.state.colorIndices[0] = this.state.colorIndices[1];
      this.state.colorIndices[2] = this.state.colorIndices[3];

      //pick two new target color indices
      //do not pick the same as the current one
      this.state.colorIndices[1] = ( this.state.colorIndices[1] + Math.floor(1 + Math.random() * (this.state.colors.length - 1))) % this.state.colors.length;
      this.state.colorIndices[3] = ( this.state.colorIndices[3] + Math.floor(1 + Math.random() * (this.state.colors.length - 1))) % this.state.colors.length;
    }
  }

  componentDidMount() {
    let self = this;

    this.timer = setInterval(() => {
      self.updateGradient();
    }, 10);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div style={{background: this.state.gradient}}>
        {this.props.children}
      </div>
    )
  }
}