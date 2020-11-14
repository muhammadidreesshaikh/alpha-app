import React from 'react';
import '../../assets/css/oders.css';
import { Link } from 'react-router-dom';

import oders from '../../mock-data/oders.json';

class Oders extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: oders.oders,
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Orders");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
               <div className="oders p-5">
                   <div className="container">
                       <div className="row">

                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">ODERS#</th>
                                    <th scope="col">DATE</th>
                                    <th scope="col">SHIP TO</th>
                                    <th scope="col">ODER TOTAL</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((item, index) => {
                                            return(
                                                <tr>
                                                    <th scope="row">{item.oders}</th>
                                                    <td>{item.date}</td>
                                                    <td>{item.ship_to}</td>
                                                    <td>{item.oder_total}</td>
                                                    <td>{item.status}</td>
                                                    {/* <td><a href="#">View Oder</a></td> */}

                                                    <td>
                                                        <Link className="press" 
                                                            to={{ pathname: "/order-detail", state: item }}>
                                                            View Oder
                                                        </Link>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        })
                                    }
            
                                </tbody>
                            </table>

                       </div>
                   </div>
               </div>
            </section>
        );
    }
}
export default Oders;