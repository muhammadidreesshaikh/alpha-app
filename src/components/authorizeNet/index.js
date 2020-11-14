import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import styled from 'styled-components'
import { FormComponent, FormContainer } from "react-authorize-net";


const clientKey = "25ajeuR8jJH4VzsCeu8HMnh826aRmdMx5w26TS6UuSreg7xQ5Ddr6Y9zXZ3jUEE9";
const apiLoginId = "47N8kuuAFU";

const StyledFormComponent = (props) => ( <FormComponent className="styledForm" {...props}/> )

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status:"unpaid"
        }
    }

    componentDidMount() {
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
        this.setState({ status: ["failure", []] });
    };


    render() {
        return (
            <Wrapper>
                <Container className="shopping-card">
                    <Row>
                        <Col xs={12}>
                                <Row>
                                    <Col xs={12}>

                                        <FormContainer
                                            environment="sandbox"
                                            onError={this.onErrorHandler}
                                            onSuccess={this.onSuccessHandler}
                                            amount={50}
                                            component={StyledFormComponent}
                                            clientKey={clientKey}
                                            apiLoginId={apiLoginId}
                                            className="payment-form"
                                        />
                                        {
                                            this.state.status[0] === "failure" ?
                                                <div className="payment-error">
                                                    <h5>Failed to process payment</h5>
                                                    {
                                                        this.state.status[1].map(error => (
                                                            <p>{error}</p>
                                                        ))
                                                    }
                                                </div>
                                                :
                                                this.state.status === "paid" ?
                                                    <h5>Thank you for your payment!</h5>
                                                    :
                                                    null
                                        }
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div``;
