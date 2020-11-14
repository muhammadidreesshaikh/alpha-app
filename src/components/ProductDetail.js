import React from 'react';
import '../assets/css/productdetail.css';

import { connect } from "react-redux";
import { AddToCart } from "../redux/actions/taskAction";

import watch from '../assets/img/watch.png'

class ProductDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.location.state,
            loading: false
        };
    } 

    componentDidMount() {
        console.log("ProductDetail > ", this.state.data);
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
        return(
            <section>
                <div className="product-detail">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="image">
                                    <img src={this.state.data.image} />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <h3>{this.state.data.other}</h3>
                                <h1>{this.state.data.title}</h1>
                                <h6>{this.state.data.currencyFormat} {this.state.data.price}</h6>
                                <p className="pt-4">{this.state.data.description1}</p>
                                <p className="pt-2">{this.state.data.description}</p>

                                <div className="pt-4">
                                    {/* <Link className="press" to="/signup">Signup</Link> */}
                                    <a className="press" onClick={() => {this.addNewItem(this.state.data)}}>Add To Cart</a>
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
)(ProductDetail);