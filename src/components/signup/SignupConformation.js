import React from 'react';
import '../../assets/css/signupconformation.css';

class SignupConformation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("SignupConformation");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            // driver
            <section>
                <div className="signup-conformation">
                    <div className="container">
                        <div className="row justify-content-center">
                            
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="row input">

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h3 className="text-center">Account Summary</h3>
                                    </div>
                                    
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Account Name*</label>
                                        <input type="text" class="form-control" placeholder="Account Name"></input>
                                    </div> 

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Account Number*</label>
                                        <input type="number" class="form-control" placeholder="Account Number"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Bill Cycle*</label>
                                        <input type="text" class="form-control" placeholder="Bill Cycle"></input>
                                    </div> 

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <label for="exampleInputEmail1">Address*</label>
                                        <input type="text" class="form-control" placeholder="Address"></input>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                       <div className="row inner pt-5">

                                            <div className="col-12 col-md-6 col-lg-6">
                                                <h6>Shipping</h6>

                                                <p className="pt-3"><strong>Customer's Address</strong></p>
                                                <p>lorem ipums</p>
                                            </div>

                                            <div className="col-12 col-md-6 col-lg-6">
                                                <h6>Payment details</h6>

                                                <p className="pt-3"><strong>Card Type</strong></p>
                                                <p>lorem ipums</p>

                                                <p  className="pt-2"><strong>Card holder</strong></p>
                                                <p>lorem ipums</p>

                                                <p className="pt-2"><strong>Card Type</strong></p>
                                                <p>lorem ipums</p>

                                                <p className="pt-2"><strong>Card number</strong></p>
                                                <p>lorem ipums</p>

                                                <p className="pt-2"><strong>Expiry date</strong></p>
                                                <p>lorem ipums</p>
                                            </div>

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
export default SignupConformation;