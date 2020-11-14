import React from 'react';
import '../../assets/css/orderdetail.css';
// import { Link } from 'react-router-dom';

class OrderDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.location.state,
            loading: false,
            total: 0,
            returnFlag: false
        };
    } 

    componentDidMount() {
        console.log("OrderDetail > ", this.state.data);

        if (this.state.data) {
            this.calculateTotal();
        }
    }

    calculateTotal = () => {
        let total = 0;

        this.state.data.order_details.products.forEach(element => {
            total += element.price;
        });

        this.setState({
            total: total
        })
    }

    toggleReturn = () => {
        this.setState({
            returnFlag: !this.state.returnFlag
        })
    }

    render() {
        return(
            <section>
                <div className="order-detail">
                    {
                        this.state.data ?
                        <div className="container">
                            <div className="row px-2 pb-5">
                                <div class="card w-100">
                                    <div class="card-header">
                                        <div className="row">
                                            <div className="col-2">
                                                <p><strong>Order Placed</strong></p>
                                                <p>{this.state.data.date}</p>
                                            </div>
                                            <div className="col-1">
                                                <p><strong>Total</strong></p>
                                                <p>{this.state.data.oder_total}</p>
                                            </div>
                                            <div className="col-9 text-right">
                                                <p><strong>Order #</strong> {this.state.data.oders}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        {
                                            this.state.data.order_details.products.map((item, index) => {
                                                return (
                                                    <div className="col-12 col-md-12 col-lg-12 border-bottom py-3" key={index}>
                                                        <div className="row">

                                                            {
                                                                this.state.returnFlag ?
                                                                <div className="col-12 col-md-1 col-lg-1 pt-3">
                                                                    <input type="checkbox" id={item.id} name={item.id} value={item.id} />
                                                                </div>
                                                                :
                                                                null
                                                            }

                                                            <div className="col-12 col-md-2 col-lg-2">
                                                                <img src={item.image} width="100" />
                                                            </div>

                                                            <div className="col-12 col-md-2 col-lg-2">
                                                                <p><strong>{item.name}</strong></p>
                                                            </div>

                                                            <div className="col-12 col-md-2 col-lg-2">
                                                                <p className="float: right">{item.id}</p>
                                                            </div>

                                                            <div className="col-12 col-md-1 col-lg-1">
                                                                <p className="float: right"><strong>{item.currency} {item.price}</strong></p>
                                                            </div>

                                                            <div className="col-12 col-md-2 col-lg-2">
                                                                <div className="side">
                                                                    <p>Odered: {item.qty}</p>
                                                                    <p>Refunded 0</p>
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-md-2 col-lg-2">
                                                                <p className="float: right"><strong>{item.currency} {item.price*item.qty}</strong></p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="row">

                                                <div className="col-12 col-md-4 col-lg-4">
                                                    <div className="track">
                                                        <p>Tracking Number(s): <span>{this.state.data.order_details.tracking}</span></p>
                                                        <a className="btn btn-secondary mt-3">Track Package</a>

                                                        <div className="mt-2">
                                                            {
                                                                this.state.returnFlag ? 
                                                                <a className="btn btn-secondary" onClick={() => { this.toggleReturn() }}>Return Selected Items</a>
                                                                :
                                                                <a className="btn btn-secondary" onClick={() => { this.toggleReturn() }}>Return Item</a>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-6">
                                                    <div className="right">
                                                        <p><strong>SUBTOTAL</strong></p>
                                                        <p><strong>(DISCOUNT {this.state.data.order_details.discount}% OFF YOUR SHOPPING CART)</strong></p>
                                                        <p><strong>SHIPPING & HINDLING</strong></p>
                                                        <p><strong>GRAND TOTAL</strong></p>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-2 col-lg-2">
                                                    <div className="right pt-5">
                                                        <p>${this.state.total}</p>
                                                        <p>$0</p>
                                                        <p>${this.state.data.order_details.shipping}</p>
                                                        <p><strong>${this.state.data.order_details.shipping+this.state.total}</strong></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        :
                        <p>No Data Found</p>
                    }
                </div>

            </section>
        );
    }
}
export default OrderDetail;