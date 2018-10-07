import * as React from 'react';
var Instascan = require('instascan');

let StellarSdk = require('stellar-sdk');
let server = new StellarSdk.Server('https://horizon.stellar.org');

var incoming: any = [];
var outgoing: any = [];

// var fs = require('fs');

export default class Tools extends React.Component<{
    message: string, // this is the prop type
  }, {
    webcamData: any|null, // this is the state type
    address: string| null
    }> {
    state = {
      webcamData: null,
      address: null,
      incoming: [],
      outgoing: []
    };

    public componentDidMount() {
        var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
        scanner.addListener('scan', (qrToString: any, image: any) => {
            console.log(qrToString);
            let json: any = JSON.parse(qrToString);
            // console.log("json", json);
            this.setState({ address: json.stellar.account.id }, () => {

                server.payments()
                    .forAccount(this.state.address)
                    .call()
                    .then(function (page: any) {
                        // console.log('Page 1: ');
                        console.log(page.records);
                        let data = page.records;
                        console.log(data);
                        data.forEach(function (transaction: any) {
                            // sent to 
                            if (transaction.from === json.stellar.account.id) {
                                outgoing.push(transaction.to);
                                // from other
                            } else {
                                incoming.push(transaction.from);
                            }
                        });
                        return page.next();
                    })
                    .then(function (page: any) {
                        console.log('Page 2: ');
                        console.log(page.records);
                        let data = page.records;
                        data.forEach(function (transaction: any) {
                            // sent to 
                            if (transaction.from === json.stellar.account.id) {
                                outgoing.push(transaction.to);
                                
                                // from other
                            } else {
                                incoming.push(transaction.from);
                            }
                        });
                        // update 
                        console.log("update");
                        document.getElementById('incoming');
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

    public render() {
        return (
            <div>
                <h1>TOOLS</h1>

                <video id="preview"></video>

                <h2>Incoming</h2>
                <p id="incoming">{this.state.incoming}</p>

                <h2>Outgoing</h2>
                <p id="outgoing">{outgoing}</p>
                {this.state.webcamData && <div>{this.state.webcamData}</div>}
            </div>
        );
    }
}
