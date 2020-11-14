import React from 'react';
import '../../assets/css/signupaddress.css';

class SignupAddress extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("SignupAddress");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // driver
            <section>
                <div className="signup-address">
                    <div className="container">
                        <div className="row justify-content-center">
                            
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="row input">

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="text-center">Address Detail</h3>
                                    </div>
                                    
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">First Name*</label>
                                        <input type="text" class="form-control" placeholder="First Name"></input>
                                    </div> 

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">Last Name*</label>
                                        <input type="text" class="form-control" placeholder="Last Name"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Address Line 1*</label>
                                        <input type="text" class="form-control" placeholder="Address"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Address Line 2*</label>
                                        <input type="text" class="form-control" placeholder="Address"></input>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <label for="exampleInputEmail1">City*</label>
                                        <input type="text" class="form-control" placeholder="City"></input>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <label for="exampleInputEmail1">State*</label>
                                        <input type="text" class="form-control" placeholder="State"></input>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <label for="exampleInputEmail1">Zip*</label>
                                        <input type="number" class="form-control" placeholder="Zip"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-check pt-4">
                                            <input type="checkbox" class="form-check-input box"></input>
                                            <label class="form-check-label" for="exampleCheck1">Use this address for payment details</label>
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
export default SignupAddress;