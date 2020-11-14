import React from 'react';
import '../assets/css/covidkit.css';

import image from '../assets/img/covid.jpg';

class CovidKit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("CovidKit");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="covid">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-10 col-lg-10">
                                <h1>Covid Kit</h1>
                                <h6 >FINDING PEACE OF MIND DURING THE COVID-19 OUTBREAK.</h6>

                                <div className="image mt-4">
                                    <img src={image}/>
                                </div>
                                <p >In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour or non-characteristic words.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default CovidKit;