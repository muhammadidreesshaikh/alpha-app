import React from 'react';
import '../../assets/css/cart.css';
import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import { UpdateItem, RemoveItem } from "../../redux/actions/taskAction";

class Cart extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
          cart: this.props.AddedItems,
          total: this.props.Total,
          qtyOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      }
  
      componentDidMount() {
          if (this.state.cart && this.state.cart.length >0) {
            this.setState({
                total: this.props.Total
            })
          }

          console.log(this.props.Total);
      }
  
      calTotal(){
          this.total = 0;
  
          this.state.cart.forEach((element, i) => {
              this.total = this.total + parseFloat(element.tamount);
          });
  
          this.setState({
            total: this.total
          })
      }
  
      inputHandler = (event, itemID) => {
        if (event.target.value != 0) {
            console.log(event.target.name);
        
            this.state.cart.forEach((element, i) => {
                if (element.id == itemID) {

                    let addItem = {
                        id: element.id,
                        image: element.image,
                        title: element.title,
                        currencyFormat: element.currencyFormat,
                        price: element.price,
                        tamount: element.price*event.target.value,
                        qty: event.target.value
                    }

                    this.state.cart.splice(i, 1);

                    this.state.cart.splice(i, 0, addItem);

                    localStorage.setItem('cart', JSON.stringify(this.state.cart));

                    this.UpdateItem(addItem);
                    
                }
                this.setState({
                    total: this.props.Total
                })
            });
        }
      }

      removeCartItem = (item) => {
        this.props.submit(
            item
        );

        this.state.cart.forEach((element, i) => {
            if (element.id == item.id) {
                this.state.cart.splice(i, 1);          
            }
        });
        this.setState({
            total: this.props.Total
        })

        this.setState({
            cart: this.state.cart
        })
    }

    UpdateItem = (item) => {
        this.props.update(
            item
        );
    }

    render() {
        return(
            <div className="cart">
                <div className="container">
                {
                            this.state.cart && this.state.cart.length >0 ?
                                <article>
                                <form className="woocommerce-cart-form">
                                    <div className="table-responsive">
                                        <table className="table cart-table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="product-remove">&nbsp;</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.cart.map((item, i) => {
                                                        return (
                                                            <tr className="cart-item" key={i}>
                                                                <td>
                                                                    <img src={item.image} />
                                                                </td>
                                                                <td className="product-name">
                                                                    {item.title}
                                                                </td>
                                                                <td className="product-price">
                                                                    <span>{item.currencyFormat} {item.price}</span>
                                                                </td>
                                                                <td className="product-quantity">
                                                                    <div className="quantity">
                                                                        {/* <input type="number" id={item.id} name={item.id} value={item.qty} className="input-text qty text" onChange={(e) => {this.inputHandler(e)}} /> */}
                                                                        
                                                                        <select onChange={(e) => {this.inputHandler(e, item.id)}}>
                                                                            {
                                                                                this.state.qtyOptions.map((item, i) => {
                                                                                    return (
                                                                                        <option value={item} id={item.id} name={item.id} key={i}>Qty: {item}</option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                        <a className="delete-item" onClick={() => {this.removeCartItem(item)}}>Delete</a>
                                                                    </div>
                                                                </td>
                                                                <td className="product-subtotal">
                                                                    <span>{item.currencyFormat} {parseFloat(item.tamount).toFixed(2)}</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-sm-push-4 col-sm-8 col-md-push-6 col-md-6 col-lg-4 col-lg-push-8">
                                        <div className="cart-totals calculated-shipping">
                                            <h2 className="border-bottom pb-2">Cart totals</h2>
                                            <h5 className="pt-2">$ <span>{parseFloat(this.props.Total).toFixed(2)}</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            :
                            <p>Your Cart is Empty.</p>
                        }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    AddedItems: state.task.AddedItems,
    Total: state.task.Total
});

const mapDispacthToProps = dispatch => {
    return {
        submit: (data) => {
            dispatch(RemoveItem(data))
        },
        update: (data) => {
            dispatch(UpdateItem(data))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispacthToProps
)(Cart);