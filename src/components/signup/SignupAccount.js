import React from 'react';
import '../../assets/css/signupaccount.css';

class SignupAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("SignupAccount");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // driver
            <section>
                <div className="signup-account">
                    <div className="container">
                        <div className="row justify-content-center">
                            
                            <div className="col-12 col-md-8 col-lg-8">
                                <div className="row input">

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="text-center">Account Detail</h3>
                                    </div>
                                    
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Email*</label>
                                        <input type="text" class="form-control" placeholder="Email"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="text" class="form-control" placeholder="Password"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Password Confirmation*</label>
                                        <input type="text" class="form-control" placeholder="Password Confirmation"></input>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}
export default SignupAccount;