import React from 'react';
import '../assets/css/security.css';

class Security extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Security");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div className="security">
                <div className="container">
                    <p>Security</p>
                </div>
            </div>
        );
    }
}
export default Security;