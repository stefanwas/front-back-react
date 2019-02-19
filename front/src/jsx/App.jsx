import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            test: 'test 123'
        };
    }

    rednder() {
        let x = 'Ala';

        return (
            <div>
                <span>{{x}} i Ula</span>
            </div>
        );
    }


}