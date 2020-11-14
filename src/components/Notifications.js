import React from 'react';
import '../assets/css/notifications.css';

class Notifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Notifications");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div className="notifications">
                <div className="container">
                    <p>Notifications</p>
                </div>
            </div>
        );
    }
}
export default Notifications;