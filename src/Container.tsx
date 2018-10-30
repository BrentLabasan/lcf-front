import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';

import Home from './components/Home';
import Fountain from './components/Fountain';
import About from './components/About';
import Tools from './components/Tools';
import Tipper from './components/Tipper';

// const logo = require('./logo.svg');

interface State {
  selectedToken: string;
}

interface Props {
}

class Container extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    // set initial state
  }

  onSelect = (selectedToken: any) => {
    console.log(selectedToken);
    this.setState({ selectedToken: selectedToken });
  }

  render() {
    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "block" }}>

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
                {/* <NavDropdown eventKey={1} title="FOUNTAIN" id="basic-nav-dropdown">
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
                </NavDropdown> */}

                <NavItem eventKey={2} href="/fountain">
                  FOUNTAIN
                </NavItem>
                <NavItem eventKey={3} href="/about">
                  ABOUT
                </NavItem>
                <NavItem eventKey={4} href="/tools">
                  TOOLS
                </NavItem>
                <NavItem eventKey={5} href="/tip">
                  TIP
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
        <br /><br /><br />

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/fountain" component={Fountain} />
            <Route path="/about" component={About} />
            <Route path="/tools" component={Tools} />
            <Route path="/tip" component={Tipper} />
          </div>
        </Router>

      </div>
    );
  }
}

export default Container;
