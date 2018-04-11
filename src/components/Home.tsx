import * as React from 'react';
import YouTube from 'react-youtube';
import { Button, Jumbotron } from 'react-bootstrap';

export default class Home extends React.Component {
    public render() {

        return (
            <div id="home">

                <Jumbotron>
                    <h1>LABASAN CRYPTO FOUNTAIN</h1>

                    <br /><br />

                    <p>
                        Click the button below to get free Time Saved Tokens!
                    </p>

                    <br /><br />

                    <a href="/fountain">
                        <Button bsStyle="warning" bsSize="large">
                            GET TST TOKENS
                        </Button>
                    </a>

                    <br /><br /><br />

                    <YouTube videoId="LtC1KYsx8To" />

                </Jumbotron>;

            </div>
        );
    }
}
