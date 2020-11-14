import React from 'react';
import '../assets/css/billing-history.css';

class BillingHistory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("BillingHistory");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div className="billing-history">
                <div className="container">
                    <p>Billing History</p>
                </div>
            </div>
        );
    }
}
export default BillingHistory;