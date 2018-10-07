import * as React from 'react';
var Instascan = require('instascan');

let StellarSdk = require('stellar-sdk');
let server = new StellarSdk.Server('https://horizon.stellar.org');

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
                
                server.transactions()
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
            } else { 
                console.log("no cameras available");
            }
        });
    }

    public getHistory() {
        var data = '';
        server.transactions()
            .forAccount(this.state.accountId)
            .call()
            .then(function (page: any) {
                console.log('Page 1: ');
                console.log(page.records);
                data = page;
                return page.next();
            })
            .then(function (page: any) {
                console.log('Page 2: ');
                console.log(page.records);
            })
            .catch(function (err: any) {
                console.log(err);
            });
        this.setState({ transaction: data });
    }

    public render() {
        let test = this.state.transaction;
        return (
            <div>
                <h1>TOOLS</h1>

                <video id="preview"></video>
                <h1>{test}</h1>

                {this.state.webcamData && <div>{this.state.webcamData}</div>}
            </div>
        );
    }
}
