import React from 'react';
import '../../assets/css/payments.css';
import { Link } from 'react-router-dom';

class Payments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Payments");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="payments p-5">
                <div className="row input">

                    <div className="col-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" placeholder="First Name"></input>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name"></input>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="text" class="form-control" placeholder="Email"></input>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <label for="exampleInputEmail1">Mobile Number</label>
                        <input type="number" class="form-control" placeholder="Mobile Number"></input>
                    </div>

                    <div className="col-12 col-md-12 col-lg-12">
                        <label for="exampleInputEmail1">Address</label>
                        <input type="text" class="form-control" placeholder="Address"></input>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <label for="exampleInputEmail1">City</label>
                        <input type="text" class="form-control" placeholder="City"></input>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <label for="exampleInputEmail1">State</label>
                        <input type="text" class="form-control" placeholder="State"></input>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <label for="exampleInputEmail1">Zip</label>
                        <input type="number" class="form-control" placeholder="7533"></input>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <label for="exampleInputEmail1">Credit Card Number</label>
                        <input type="number" class="form-control" placeholder="CC Number"></input>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <label for="exampleInputEmail1">Expiration</label>
                        <input type="text" class="form-control" placeholder="Expiration"></input>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <label for="exampleInputEmail1">CCV</label>
                        <input type="number" class="form-control" placeholder="CCV"></input>
                    </div>


                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="pt-5 text-center">
                            <Link className="press" to="/oders">Save Credit Card Information</Link>
                        </div>
                    </div>

                    </div>
            </section>
        );
    }
}
export default Payments;