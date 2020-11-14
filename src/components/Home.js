import React from 'react';
import Slider from '../shared/Slider';
import '../assets/css/home.css';
import products from '../mock-data/products.json';

// import logo from '../assets/img/logo.png';
import Background from '../assets/img/home1.jpg';
import Background1 from '../assets/img/home2.jpg';
import image from '../assets/img/c1.png'
import image1 from '../assets/img/c2.jpg'
import image2 from '../assets/img/c3.png'
import image3 from '../assets/img/c4.jpg'

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: products.products,
            cart: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Home");

        this.setState({
            loading: true
        });
    }

    addToCart(item) {

        let addItem = {
            id: item.id,
            image: '',
            title: item.title,
            currencyFormat: item.currencyFormat,
            price: item.price,
            tamount: item.price,
            qty: 1
        }

        this.state.cart.push(addItem);
        localStorage.setItem('cart', JSON.stringify(this.state.cart));

        console.log(localStorage.getItem('cart'));
        console.log(this.state.cart);
        
    }

    render() {
        return(
            <section>
                <Slider />

                <div className="connect">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="left" style={{backgroundImage: `url(${Background})`}}>
                                    <h1>Stay connected with your loved ones</h1>

                                    <div className="pt-4">
                                        <a className="press" href="#">Learn more </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="right" style={{backgroundImage: `url(${Background1})`}}>
                                    <h1>Let's put some dummy text</h1>
                                    <p className="pt-2">Some other longer text there and hopla.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="profiles">
                    <div className="container-fluid">
                        <div className="row justify-content-center">

                            {/* <div className="col-12 col-md-3 col-lg-3">
                                <div className="wrapper">

                                   <h6 className="border px-3 py-4">"There are many variations of passages If you are going to use you need to be sure there isn't anything embarrassing hidden in the middle of text"! </h6>

                                   <div className="col-12 col-md-12 col-lg-12">
                                       <div className="row inner-one">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <img src={image3} />
                                            </div>

                                            <div className="col-12 col-md-8 col-lg-8 px-0">
                                                <h3>Andre Zreyo</h3>
                                                <p>Owner at BrandStrom Studios</p>
                                            </div>
                                       </div>
                                   </div>

                                </div>
                            </div> */}

                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="wrapper">

                                   <h6 className="border px-3 py-4">"There are many variations of passages If you are going to use you need to be sure there isn't anything embarrassing hidden in the middle of text"! </h6>

                                   <div className="col-12 col-md-12 col-lg-12">
                                       <div className="row inner-one">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <img src={image} />
                                            </div>

                                            <div className="col-12 col-md-8 col-lg-8 px-0">
                                                <h3>Josh Wolf</h3>
                                                <p>Owner at BrandStrom Studios</p>
                                            </div>
                                       </div>
                                   </div>

                                </div>
                            </div>

                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="wrapper">

                                    <h6 className="border px-3 py-4">"There are many variations of passages If you are going to use you need to be sure there isn't anything embarrassing hidden in the middle of text"! </h6>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="row inner-one">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <img src={image1} />
                                            </div>

                                            <div className="col-12 col-md-8 col-lg-8 px-0">
                                                <h3>Andrew James</h3>
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-md-3 col-lg-3">
                                <div className="wrapper">

                                    <h6 className="border px-3 py-4">"There are many variations of passages If you are going to use you need to be sure there isn't anything embarrassing hidden in the middle of text"! </h6>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="row inner-one">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <img src={image2} />
                                            </div>

                                            <div className="col-12 col-md-8 col-lg-8 px-0">
                                                <h3>Josh Wolf</h3>
                                                <p>Owner at BrandStrom Studios</p>
                                            </div>
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
export default Home;