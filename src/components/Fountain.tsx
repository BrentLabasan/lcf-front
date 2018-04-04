import * as React from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import Instructions from './Instructions/Instructions';

interface State {
    selectedToken: string;
    issuerAccountId: string;
    address?: string;
    addressIsValid?: boolean;
    hasEnoughXlm: boolean;
    canAcceptToken: boolean;
    key?: number;
    lastEnteredAddress?: string;
}

interface Props {
    selectedToken: string;
}

export default class Fountain extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        // set initial state
        this.state = {
            selectedToken: this.props.selectedToken,
            issuerAccountId: '',
            address: '',
            addressIsValid: false,
            hasEnoughXlm: false,
            canAcceptToken: false,
            key: 1,
            lastEnteredAddress: ''
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    changeLastEnteredAddress = (address?: string) => {
        this.setState({ lastEnteredAddress: address });
    }

    handleSelect = (eventKey: any) => {
        // eventKey.
        switch (eventKey) {
            case 1: {
                this.setState({ key: eventKey, selectedToken: 'SECOND' });
                break;
            }
            case 2: {
                this.setState({ key: eventKey, selectedToken: 'MINUTE' });
                break;
            }
            case 3: {
                this.setState({ key: eventKey, selectedToken: 'HOUR' });
                break;
            }
            case 4: {
                this.setState({ key: eventKey, selectedToken: 'DAY' });
                break;
            }
            case 5: {
                this.setState({ key: eventKey, selectedToken: 'WEEK' });
                break;
            }
            case 6: {
                this.setState({ key: eventKey, selectedToken: 'MONTH' });
                break;
            }
            case 7: {
                this.setState({ key: eventKey, selectedToken: 'YEAR' });
                break;
            }
            default: {
                // statements; 
                break;
            }
        }

    }

    public render() {
        return (
        <div>
            {/* <Tabs defaultActiveKey={3} id="uncontrolled-tab-example" animation={false}> */}
            <br />
            <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="uncontrolled-tab-example" animation={false}>

                {/* <Tabs activeKey={this.state.key} onSelect={this.handleSelect} animation={false} id="controlled-tab-example"> */}

                <Tab eventKey={1} title="SECOND">
                    <Instructions tokenName="SECOND" issuerAccountId="GAYZT6ZQCWRSUYUYKTTMX2BACITUQRXZPBXLY7H5PJ4WUNJU6ZET42W5" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
                <Tab eventKey={2} title="MINUTE">
                    <Instructions tokenName="MINUTE" issuerAccountId="GCLU3JPHTGA6KTWP77VZ44VJKCYA2K2F7CDLWBYL5KQQ6XC27F44XWGM" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
                <Tab eventKey={3} title="HOUR">
                    <Instructions tokenName="HOUR" issuerAccountId="GA2L7HVLDVJ76HKSPGR3IRD2ZX2AWHRPGA7PKAEGNUIAPKIL72GX5UEG" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
                <Tab eventKey={4} title="DAY">
                    <Instructions tokenName="DAY" issuerAccountId="GAELLKQPLBQVZZURK7JT45U22RQIU2DN57HPGBOGQYJLPGN25NEZKT7U" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
                <Tab eventKey={5} title="WEEK">
                    <Instructions tokenName="WEEK" issuerAccountId="GAKMD63LOOLWXNJOQPIZ6IF2MW3ABHT2N6RE4H3ECU57JQMUGDIBP5X2" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
                <Tab eventKey={6} title="MONTH">
                    <Instructions tokenName="MONTH" issuerAccountId="GAHOPLW6VEXFCZK4PC3RZHDQIASRA4NM7IUXLBSLNUUZ2CL4F5ITYDLF" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
                <Tab eventKey={7} title="YEAR">
                    <Instructions tokenName="YEAR" issuerAccountId="GAHE3PVC4QE5TBOMXKVOQF56ZMOPSDJ6WSLQJPDNSPROVRCXRBUPGLFU" address={this.state.address} addressIsValid={this.state.addressIsValid} hasEnoughXlm={this.state.hasEnoughXlm} canAcceptToken={this.state.canAcceptToken} selectedToken={this.state.selectedToken} />
                </Tab>
            </Tabs>
        </div>
        );
    }
}