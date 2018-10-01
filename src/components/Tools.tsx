import * as React from 'react';
var Instascan = require('instascan');

export default class Tools extends React.Component<{}, { webcamData: string|null }> {

    constructor(props: any) {
        super(props);
        this.state = { webcamData:  null };
    }

    public componentDidMount() {
        var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
        scanner.addListener('scan', (content: any, image: any) => {
            console.log(content);
            this.setState({webcamData: content});
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
