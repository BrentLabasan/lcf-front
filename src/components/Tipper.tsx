import * as React from 'react';

export default class Tipper extends React.Component {
    render() {
        return (
            <div id="TipperForComputerLabs">
                {/* <h1>Tipper</h1> */}

                <h2 id="heroText">HOW MUCH TIME DID OUR TUTORS SAVE YOU ?</h2>
                <p id="sentence">
                    <input type="text" placeholder={"TUTOR NAME"} value={""} /> saved <input type="text" placeholder={"STUDENT NAME"} value={''} /> <input type="number" min="1" max="99" placeholder="15" />

                    <select name='' >
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