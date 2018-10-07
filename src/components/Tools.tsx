import * as React from 'react';
var Instascan = require('instascan');

let StellarSdk = require('stellar-sdk');
let server = new StellarSdk.Server('https://horizon.stellar.org');

// var fs = require('fs');

export default class Tools extends React.Component<{
    message: string, // this is the prop type
  }, {
    webcamData: any|null, // this is the state type
    address: string| null
    }> {
    state = {
      webcamData: null,
      address: null
    };

    public componentDidMount() {
        var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
        scanner.addListener('scan', (qrToString: any, image: any) => {
            console.log(qrToString);
            let json: any = JSON.parse(qrToString);
            console.log("json", json);
            this.setState({ address: json.stellar.account.id }, () => {
                
                server.payments()
                .forAccount(this.state.address)
                .call()
                .then(function (page: any) {
                    console.log('Page 1: ');
                    console.log(page.records);

                    return page.next();
                })
                .then(function (page: any) {
                    console.log('Page 2: ');
                    console.log(page.records);
                })
                .catch(function (err: any) {
                    console.log(err);
                });

            });
        });

        Instascan.Camera.getCameras().then(function (cameras: any) {
            if (cameras.length > 0) {
                scanner.start(cameras[0]);
            }
        });
    }

    public render() {
        return (
            <div>
                <h1>TOOLS</h1>

                <video id="preview"></video>

                {this.state.webcamData && <div>{this.state.webcamData}</div>}
            </div>
        );
    }
}
