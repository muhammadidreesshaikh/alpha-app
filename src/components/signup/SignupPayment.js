import React from 'react';
import '../../assets/css/signuppayment.css';

class SignupPayment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("SignupPayment");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // driver
            <section>
                <div className="signup-payment">
                    <div className="container">
                        <div className="row justify-content-center">
                            
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="row input">

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="text-center">Payment Detail</h3>
                                    </div>
                                    
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">Card Name*</label>
                                        <input type="text" class="form-control" placeholder="Card Name"></input>
                                    </div> 

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">Card Number*</label>
                                        <input type="number" class="form-control" placeholder="Card Number"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">Expiration Date*</label>
                                        <input type="number" class="form-control" placeholder="Expiration Date"></input>
                                    </div> 

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">CVV*</label>
                                        <input type="number" class="form-control" placeholder="Last three digits on signature strip"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-check pt-4">                                            
                                            <input type="checkbox" id="remember" name="remember" value="remember" />
                                            <label for="remember" className="ml-2"> Remember credit card details for next time</label>
                                        </div>
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
export default SignupPayment;