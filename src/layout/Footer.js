import React from 'react';
import '../assets/css/footer.css';
import logo from '../assets/img/logo.svg'

import { SocialMedia_URL } from "../../src/config"

function Footer() {
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="first">
                                <img src={logo} />
                                {/* <h3>Logo</h3> */}
                                <p className="pt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Their default model text, and a search for uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>

                                <div className="pt-4">
                                    <a className="press" href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="first">
                                <h3>COMPANY</h3>
                                <ul>
                                    <li><a href="#">Our History</a></li>
                                    <li><a href="#"> Investor Relations & Policies</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Sale 30%</a></li>
                                    <li><a href="#">Merchandise Store</a></li>
                                </ul>
                            </div>
                        </div> 

                        <div className="col-md-3">
                            <div className="first">
                                <h3>STAY CONNECTED</h3>
                                <ul>
                                    <li className="socials">
                                        <a target="blank" href={SocialMedia_URL.youtube}><i class="fab fa-youtube"></i></a>
                                        <a target="blank" href={SocialMedia_URL.facebook}><i class="fab fa-facebook"></i></a>
                                        <a target="blank" href={SocialMedia_URL.twitter}><i class="fab fa-twitter"></i></a>
                                        <a target="blank" href={SocialMedia_URL.instagram}><i class="fab fa-instagram-square"></i></a>
                                        <a target="blank" href={SocialMedia_URL.pinterest}><i class="fab fa-pinterest"></i></a>
                                    </li>
                                    <li><a href="#">Our App</a></li>
                                    <li><a href="#">111-235-0101</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="seprator"></div>

                        <div className="col-md-12">
                            <div className="last pt-2">
                                <p>© Copyright 2020, Alex. All Rights Reserved.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;