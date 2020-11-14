import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../mock-data/products.json';

import { connect } from "react-redux";
import { AddToCart } from "../../redux/actions/taskAction";

import Cart from './Cart';
import CheckOut from './CheckOut';
import Payment from './Payment';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: products.products,
            loading: false,
            cart: this.props.AddedItems,
            step: 'review-bag'
        };
    } 

    componentDidMount() {
        console.log("Main Cart");
    }

    pageShift = (value) => {
        if (this.state.cart.length > 0) {
            this.setState({
                step: value
            }); 
        }
        else {
            alert('Your Cart is Empty.');
        }
        
    }

    addToCart(item) {

        let addItem = {
            id: item.id,
            image: item.image,
            title: item.title,
            currencyFormat: item.currencyFormat,
            price: item.price,
            tamount: item.price,
            qty: 1
        }

        if (this.state.cart.some(item => item.id == addItem.id)) {
            alert('Item already exist is cart.');
        }
        else {
            this.state.cart.push(addItem);
            localStorage.setItem('cart', JSON.stringify(this.state.cart));

            this.setState({
                cart: this.state.cart
            })
        }
    }

    addNewItem = (item) => {
        let addItem = {
            id: item.id,
            image: item.image,
            title: item.title,
            currencyFormat: item.currencyFormat,
            price: item.price,
            tamount: item.price,
            qty: 1
        }

        this.props.submit(
            addItem
        );

        this.addToCart(item);
    }

    render() {
        return(
            <section>
                <div className="container pt-5">
                    <h4 className="text-center">Checkout</h4>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-md-8 offset-md-2 block">
                            <div className="wrapper-progressBar">
                                <ul className="progressBar">
                                    <li onClick={()=>{this.pageShift("review-bag")}} className={ this.state.step == "review-bag" || this.state.step == "shipping-address" || this.state.step == "payment-details" ? 'active' : ''}>Review your bag</li>
                                    <li onClick={()=>{this.pageShift("shipping-address")}} className={ this.state.step == "shipping-address" ? 'active' : '' || this.state.step == "payment-details" ? 'active' : ''}>Shipping Address</li>
                                    <li  onClick={()=>{this.pageShift("payment-details")}} className={ this.state.step == "payment-details" ? 'active' : ''}>Payment Details</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>

                { this.state.step == "review-bag" ? <Cart /> : null }
                { this.state.step == "shipping-address" ? <CheckOut /> : null }
                { this.state.step == "payment-details" ? <Payment /> : null }

                <div className="container text-center actions">
                    {
                        this.state.cart.length > 0 && this.state.step == "review-bag" ?
                        <Link className="press" onClick={()=>{this.pageShift("shipping-address")}}>Continue</Link>
                        :
                        null
                    }
                    {
                        this.state.cart.length > 0 && this.state.step == "shipping-address" ?
                        <Link className="press" onClick={()=>{this.pageShift("payment-details")}}>Next</Link>
                        :
                        null
                    }
                </div>

                <div className="metro">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                                <h1>Suggested Products</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>

                            <div className="image-1st col-12 col-md-12 col-lg-12">
                                <div className="row">

                                {
                                    this.state.data.map((item, index) => {
                                        return (
                                            <div className="col-sm-12 col-md-3 col-lg-3" key={index}>
                                            <div className="wrapper-main position-relative">
                                                <div className="flap">
                                                    <Link to={{ pathname: "/productDetail", state: item }}>
                                                        <p><b>{item.title}</b></p>
                                                        <p>{item.description1}</p>
                                                        <p className="pt-5 mb-3">
                                                            <span><i className="far fa-heart"></i> {item.currencyFormat}{item.price}</span>
                                                        </p>
                                                    </Link>
                                                    <a className="press-outline cart-butn mt-3" onClick={() => {this.addNewItem(item)}}>Add To Cart</a>
                                                </div>
                                                <img src={item.image} />
                                                <p className="norm-text"><b>{item.title}</b></p>
                                            </div>
                                        </div>
                                        )
                                    })
                                }

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
    AddedItems: state.task.AddedItems
});

const mapDispacthToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(AddToCart(data))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispacthToProps
)(Main);