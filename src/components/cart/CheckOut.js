import React from 'react';
import '../../assets/css/checkout.css';
import { Link } from 'react-router-dom';

class CheckOut extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("CheckOut");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="checkout">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="row input">

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

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">City*</label>
                                        <input type="text" class="form-control" placeholder="City"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">State/Province/Region</label>
                                        <input type="text" class="form-control" placeholder="State"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">Zip / postal code*</label>
                                        <input type="number" class="form-control" placeholder="7533"></input>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <label for="exampleInputEmail1">Country*</label>
                                        <input type="text" class="form-control" placeholder="Country"></input>
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
export default CheckOut;