import * as React from 'react';
import { Navbar, Grid } from 'react-bootstrap';

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
                <a href="/">LABASAN CRYPTO FOUNTAIN<sup style={{marginLeft: 5, fontSize: 12, fontWeight: "bold", color: "orange"}}>BETA</sup></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

export default App;
