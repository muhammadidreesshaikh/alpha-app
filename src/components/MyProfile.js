import React from 'react';
import '../assets/css/my-profile.css';

class MyProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("MyProfile");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div className="my-profile">
                <div className="container">
                    <p>My Profile</p>
                </div>
            </div>
        );
    }
}
export default MyProfile;