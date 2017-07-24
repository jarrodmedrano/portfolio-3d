import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'



export class Navigator extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  myLink = (to, text, id, target, props) => {
    const current = this.props.location.pathname === to;

    return (
      <NavItem key={id}><NavLink tag={Link} target={target} { ...( current ? { disabled: true } : {} ) } to={to}>{text}</NavLink></NavItem>
    )
  };


  render() {

    const links = [
      {
      route: '/',
      title: 'Home'
      },
      {
        route: '/contact',
        title: 'Contact'
      },
      {
        route: 'https://github.com/jarrodmedrano',
        title: 'Github',
        target: '_blank'
      },
      {
        route: 'https://www.linkedin.com/in/jarrod-medrano-b89b0037/',
        title: 'LinkedIn',
        target: '_blank'
      }
    ];

    return (
      <div>
        <Navbar className="navbar-inverse bg-inverse" dark toggleable>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>
              {links.map((result, id) => {
                return (
                  this.myLink(result.route, result.title, id, result.target, ...this.props)
                )
              }, this)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}