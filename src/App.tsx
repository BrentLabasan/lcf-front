import * as React from 'react';
import { Navbar, Grid, Jumbotron } from 'react-bootstrap';

import './App.css';

// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse={true} fixedTop={true}>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              {/* <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
              </Button> */}
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
