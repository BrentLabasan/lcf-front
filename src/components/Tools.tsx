import * as React from 'react';
var Instascan = require('instascan');

var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

interface State {
    webcamData: string | null;
    accountId: string;
    transaction: string;
}

export default class Tools extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            webcamData: null,
            accountId: 'GA3GTTCFBTZURZKV43PHZME2YG7XBEN35WQCI7V45TBPZEP5G7RQ4K45',
            transaction: ''
        };
    }

    public componentDidMount() {
        var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
        scanner.addListener('scan', (content: any, image: any) => {
            console.log(content);
            this.setState({ webcamData: content });
            // get accountId from webcamData
            // store id into state?
            // get account transactions
            this.getHistory();
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
