import React from 'react';
import '../assets/css/howitwork.css';

import Background from '../assets/img/h3.jpg';
import Background1 from '../assets/img/h2.jpg';
import Background2 from '../assets/img/h1.jpg';

class HowItWork extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("HowItWork");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-mg-12 col-lg-12">
                                <h1>How It Work</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="work">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                               <div className="row">

                                    <div className="col-12 col-md-12 col-lg-12">                                    
                                        <h2>Three Easy Steps</h2>                                       
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Purchase the right hardware for you</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Easy and intuitive install</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Start using the app and get insights and real-time alerts</a>
                                        </div>
                                    </div>

                                    
                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div class="card" style={{backgroundImage: `url(${Background})`}}>
                                            <h6 class="card-text">Hardware Image</h6>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Top the line hardware that users latest sensor technology</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Custom app that provides insights and real-time alerts using algorithms</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div class="card" style={{backgroundImage: `url(${Background1})`}}>
                                            <h6 class="card-text">App Image</h6>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-8 col-lg-8">
                                        <div class="card" style={{backgroundImage: `url(${Background2})`}}>
                                            <h6 class="card-text">Health Kit</h6>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 col-lg-4">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Health kit add on for increased safety</a>
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
export default HowItWork;