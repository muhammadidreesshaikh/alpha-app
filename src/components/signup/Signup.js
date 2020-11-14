import React from 'react';
import '../../assets/css/signup.css';
import { Link } from 'react-router-dom';

import SignupAccount from './SignupAccount';
import SignupAddress from './SignupAddress';
import SignupPayment from './SignupPayment';
import SignupConformation from './SignupConformation';

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            step: 'signup-account'
        };
    } 

    componentDidMount() {
        console.log("Signup");

        this.setState({
            loading: true
        });
    }

    pageShift = (value) => {
        this.setState({
            step: value
        });
    }

    render() {
        return(
            <section>
                <div className="container pt-5">
                    <h4 className="text-center">Create an Account</h4>
                    <div className="row">
                        <div className="col-xs-12 col-md-8 offset-md-2 block">
                            <div className="wrapper-progressBar">
                                <ul className="progressBar">
                                    <li className={ this.state.step == "signup-account" || this.state.step == "signup-address" || this.state.step == "signup-payment" || this.state.step == "signup-confirmation" || this.state.step == "all-set" ? 'active' : ''}>Account</li>
                                    <li className={ this.state.step == "signup-address" || this.state.step == "signup-payment" || this.state.step == "signup-confirmation" || this.state.step == "all-set" ? 'active' : ''}>Address</li>
                                    <li className={ this.state.step == "signup-payment" || this.state.step == "signup-confirmation" || this.state.step == "all-set" ? 'active' : ''}>Payment</li>
                                    <li className={ this.state.step == "signup-confirmation" || this.state.step == "all-set" ? 'active' : ''}>Confirmation</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="signup-form py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            { this.state.step == "signup-account" ? <SignupAccount/> : null }
                            { this.state.step == "signup-address" ? <SignupAddress/> : null }
                            { this.state.step == "signup-payment" ? <SignupPayment/> : null }
                            { this.state.step == "signup-confirmation" ? <SignupConformation/> : null }

                            { this.state.step == "all-set" ?
                            <div className="container text-center">
                                <h4>You're all Set.</h4>
                                <p>Account Create Successfully.</p>
                            </div>
                            : 
                            null }
                        </div>

                        <div className="row justify-content-center">
                            {
                                this.state.step == "signup-account" ?
                                <Link className="press w-50 d-block text-center" onClick={()=>{this.pageShift("signup-address")}}>Next</Link>
                                :
                                null
                            }
                            {
                                this.state.step == "signup-address" ?
                                <div>
                                    <Link className="press px-5 mr-5 text-center" onClick={()=>{this.pageShift("signup-account")}}>Back</Link>
                                    <Link className="press px-5 text-center" onClick={()=>{this.pageShift("signup-payment")}}>Next</Link>
                                </div>
                                :
                                null
                            }
                            {
                                this.state.step == "signup-payment" ?
                                <div>
                                    <Link className="press px-5 mr-5 text-center" onClick={()=>{this.pageShift("signup-address")}}>Back</Link>
                                    <Link className="press px-5 text-center" onClick={()=>{this.pageShift("signup-confirmation")}}>Next</Link>
                                </div>
                                :
                                null
                            }
                            {
                                this.state.step == "signup-confirmation" ?
                                <div>
                                    <Link className="press px-5 mr-5 text-center" onClick={()=>{this.pageShift("signup-payment")}}>Back</Link>
                                    <Link className="press px-5 text-center" onClick={()=>{this.pageShift("all-set")}}>Save</Link>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}
export default Signup;