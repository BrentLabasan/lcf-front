import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid } from 'react-bootstrap';

import './App.css';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse={false} fixedTop={true}>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">LABASAN CRYPTO FOUNTAIN<sup style={{ marginLeft: 5, fontSize: 12, fontWeight: "bold", color: "orange" }}>BETA</sup></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>

            <Nav>
              <NavDropdown eventKey={1} title="FOUNTAIN" id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>XLM (Stellar Lumens)</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.2}>SECOND</MenuItem>
                <MenuItem eventKey={1.3}>MINUTE</MenuItem>
                <MenuItem eventKey={1.4}>HOUR</MenuItem>
                <MenuItem eventKey={1.5}>DAY</MenuItem>
                <MenuItem eventKey={1.6}>WEEK</MenuItem>
                <MenuItem eventKey={1.7}>MONTH</MenuItem>
                <MenuItem eventKey={1.8}>YEAR</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.9}>MASLOW1</MenuItem>
                <MenuItem eventKey={1.10}>MASLOW2</MenuItem>
                <MenuItem eventKey={1.11}>MASLOW3</MenuItem>
                <MenuItem eventKey={1.12}>MASLOW4</MenuItem>
                <MenuItem eventKey={1.13}>MASLOW5</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                ABOUT
              </NavItem>

            </Nav>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

export default App;
