import React from 'react';
import '../assets/css/faqs.css';

import Background from '../assets/img/b.jpeg';
import Background1 from '../assets/img/b1.jpg';
import Background2 from '../assets/img/b2.jpg';

class Faqs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Faqs");

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
                                <h1>Let us help you.</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faqs">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-12 col-lg-12">
                               <div className="row">
                                    
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="card" style={{backgroundImage: `url(${Background})`}}>
                                            <h6 class="card-text">Installation videos</h6>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Link to videos page and printable guide</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="card" style={{backgroundImage: `url(${Background1})`}}>
                                            <h6 class="card-text">FAQs</h6>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Link to page with FAQs</a>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="card" style={{backgroundImage: `url(${Background2})`}}>
                                            <h6 class="card-text">Education</h6>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="right-side">
                                            <a href="#" class="card-text">Link to education that we provide in the app?</a>
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
export default Faqs;