import React from 'react';
import '../assets/css/mobileapp.css';

import image from '../assets/img/i.png';
import image1 from '../assets/img/a.png';
import image2 from '../assets/img/mobile.png';

class MobileApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("MobileApp");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="app">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-6">
                                <h1 >Download Over App Now</h1>
                                <p>In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or Lorem Ipsum has been the standard dummy text  a typeface without relying on meaningful content. </p>

                                <div className="mt-4">
                                    <a href="#"><img src={image} /></a>   <a href="#"><img src={image1} /></a>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="mobile">
                                    <img src={image2}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MobileApp;