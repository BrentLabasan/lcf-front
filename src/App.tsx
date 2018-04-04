import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid } from 'react-bootstrap';

import './App.css';

// const logo = require('./logo.svg');

class App extends React.Component {
  onSelect = (e: any) => {
    alert(e);
  }
  
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
            <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={1} title="FOUNTAIN" id="basic-nav-dropdown">
                <MenuItem onSelect={this.onSelect} eventKey={"XLM"}>XLM (Stellar Lumens)</MenuItem>
                <MenuItem divider />
                <MenuItem onSelect={this.onSelect} eventKey={"SECOND"}>SECOND</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"MINUTE"}>MINUTE</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"HOUR"}>HOUR</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"DAY"}>DAY</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"WEEK"}>WEEK</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"MONTH"}>MONTH</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"YEAR"}>YEAR</MenuItem>
                <MenuItem divider />
                <MenuItem onSelect={this.onSelect} eventKey={"MASLOW1"}>MASLOW1</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"MASLOW2"}>MASLOW2</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"MASLOW3"}>MASLOW3</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"MASLOW4"}>MASLOW4</MenuItem>
                <MenuItem onSelect={this.onSelect} eventKey={"MASLOW5"}>MASLOW5</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                ABOUT
              </NavItem>
            </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

export default App;
