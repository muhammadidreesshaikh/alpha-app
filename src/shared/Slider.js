import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/slider.css';

import logo from '../assets/img/logo.png'
import door from '../assets/img/door-sensor-png.png'

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Slider");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section className="container-fluid">
                <div className="slider">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="rendom">
                                    <img src={logo} />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <h1 className="pt-5">Lorem Ipsum</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>

                                <div className="pt-5">
                                    <Link className="press-outline px-5 py-3" to="/signup">Signup</Link>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <img src={door} />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Slider;