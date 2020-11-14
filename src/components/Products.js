import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/products.css';
import products from '../mock-data/products.json';

import { connect } from "react-redux";
import { AddToCart } from "../redux/actions/taskAction";

class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: products.products,
            loading: false,
            cart: []
        };
    } 

    componentDidMount() {
        console.log("Products");

        this.setState({
            loading: true
        });
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
    }

    render() {
        // getting AddedItems from redux store
        // console.log("this.props.AddedItems : ", this.props.AddedItems);

        return(
            <div className="metro">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md-12 col-lg-12">
                            <h1>Products</h1>
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
)(Products);