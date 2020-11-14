import React from 'react';
import '../assets/css/forgetpassword.css';
// import { Link } from 'react-router-dom';

class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loading: false,
            forget: false
        };
    } 

    componentDidMount() {
        console.log("ForgetPassword");
    }

    forget = () => {
        this.setState({
            forget: true
        });
    }

    done = () => {
        this.setState({
            forget: false
        });
    }

    render() {
        return(
            <section>
               {
                this.state.forget == false ?
                   <div className="forget">
                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-12 col-md-5 col-lg-5">
                                    <div className="row input">

                                        <div className="col-12 col-md-12 col-lg-12">
                                        <h4>Forget Password?</h4>
                                        <p>We will send you instruction to reset your password.</p>
                                        </div>

                                        <div className="col-12 col-md-12 col-lg-12">
                                            <input type="text" class="form-control" placeholder="Email"></input>
                                        </div>

                                        <div className="col-12 col-md-12 col-lg-12 mt-4">
                                            <a onClick={() => {this.forget()}} className="press text-center mt-5" href="#">Next</a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                :
                <div className="done">
                   <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="input">

                                    <i class="fas fa-check"></i>
                                    <h1 className="pt-5">Password Reset Email Sent</h1>
                                    <h6>An email has been sent to your rescue email address, j....@icloud.com. Flow the directions in the email to reset your password.</h6>

                                    <div className="col-12 col-md-12 col-lg-12 mt-4">
                                        <a onClick={() => {this.done()}} className="press text-center mt-5" href="#">Done</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                   </div>
               </div>
               }
            </section>
        );
    }
}
export default ForgetPassword;