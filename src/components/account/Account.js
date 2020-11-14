import React from 'react';
import '../../assets/css/account.css';

import AccountInfo from './AccountInfo';
import Payments from './Payments';
import Orders from './Oders';
import UpdatePassword from './UpdatePassword';

class Account extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            page: "account-info"
        };
    } 

    componentDidMount() {
        console.log("Account");

        this.setState({
            loading: true
        });
    }

    pageShift = (value) => {
        this.setState({
            page: value
        });
    }

    render() {
        return(
            <section>
                <div className="account">
                    <div className="container1">
                        <div className="row">

                            <div className="col-2 col-md-2 col-lg-2 pr-0">
                                <div className="side">
                                    <ul>
                                        <li onClick={()=>{this.pageShift("account-info")}}>Account</li>
                                        <li onClick={()=>{this.pageShift("payments")}}>Payments</li>
                                        <li onClick={()=>{this.pageShift("orders")}}>Oders</li>
                                        <li onClick={()=>{this.pageShift("login-security")}}>Login & Security</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-10 col-md-10 col-lg-10 pl-0">
                                {
                                    this.state.page == "account-info" ?
                                    <AccountInfo />
                                    :
                                    null
                                }

                                {
                                    this.state.page == "payments" ?
                                    <Payments />
                                    :
                                    null
                                }

                                {
                                    this.state.page == "orders" ?
                                    <Orders />
                                    :
                                    null
                                }

{
                                    this.state.page == "login-security" ?
                                    <UpdatePassword />
                                    :
                                    null
                                }
                
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Account;