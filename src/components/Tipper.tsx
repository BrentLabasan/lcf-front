import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Tipper extends React.Component<{
    buttonLabel: any,
    className: any
}, { isModalActive: boolean }> {
    state = {
        isModalActive: false
    };

    toggle = () => {
        console.log("activate");
        this.setState({
            isModalActive: true
        });
    }
    render() {
        return (
            <div id="TipperForComputerLabs">
                {/* <h1>Tipper</h1> */}
                <Modal isOpen={this.state.isModalActive} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <h2 id="heroText">HOW MUCH TIME DID OUR TUTORS SAVE YOU ?</h2>
                <p id="sentence">
                    <input onClick={this.toggle} className="underlineBorder" type="text" placeholder={"TUTOR NAME"} value={""} />
                    saved <input className="underlineBorder" type="text" placeholder={"STUDENT NAME"} value={''} />
                    <input className="underlineBorder" type="number" min="1" max="99" placeholder="15" />
                    <select name='' className="underlineBorder">
                        {/* <option title='SECONDS' value='SECONDS'>SECONDS</option> */}
                        <option title='MINUTES' value='MINUTES'>MINUTES</option>
                        <option title='HOURS' value='HOURS'>HOURS</option>
                        <option title='DAYS' value='DAYS'>DAYS</option>
                        <option title='WEEKS' value='WEEKS'>WEEKS</option>
                        <option title='MONTHS' value='MONTHS'>MONTHS</option>
                        <option title='YEARS' value='YEARS'>YEARS</option>
                    </select>

                </p>
            </div>
        );
    }
}