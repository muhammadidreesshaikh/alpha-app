import React from 'react';
import { connect } from "react-redux";
import '../../assets/css/payment.css';

import styled from 'styled-components'
import { FormComponent, FormContainer } from "react-authorize-net";
const clientKey = "25ajeuR8jJH4VzsCeu8HMnh826aRmdMx5w26TS6UuSreg7xQ5Ddr6Y9zXZ3jUEE9";
const apiLoginId = "47N8kuuAFU";
const StyledFormComponent = (props) => ( <FormComponent className="styledForm" {...props}/> )

class Payment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            status:"unpaid",
            total: this.props.Total,
        };
    } 

    componentDidMount() {
        console.log("Payment");

        this.loadScript('https://jstest.authorize.net/v3/AcceptUI.js');
    }

    loadScript = (src) => {
        var tag = document.createElement('script');
        tag.src = src;
        document.body.appendChild(tag);
    }

    onErrorHandler = (response) => {
        this.setState({
            status: ["failure", response.messages.message.map(err => err.text)]
        });
    };

    onSuccessHandler = (response) => {
        // this.setState({ status: ["failure", []] });
        console.log("response", response);
    };

    render() {
        return(
            // driver
            <section> 
                <div className="payment">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-8 col-lg-8">
                                <div className="row input mt-5">

                                    <div className="col-12">
                                        <h3 className="text-center">Payment Method</h3>
                                    </div>

                                    <FormContainer
                                        environment="sandbox"
                                        onError={this.onErrorHandler}
                                        onSuccess={this.onSuccessHandler}
                                        amount={this.state.total}
                                        component={StyledFormComponent}
                                        clientKey={clientKey}
                                        apiLoginId={apiLoginId}
                                        className="payment-form"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    AddedItems: state.task.AddedItems,
    Total: state.task.Total
});

export default connect(
    mapStateToProps
)(Payment);