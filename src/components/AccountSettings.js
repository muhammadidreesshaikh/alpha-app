import React from 'react';
import '../assets/css/account-settings.css';

class AccountSettings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    } 

    componentDidMount() {
        document.getElementById('Home').style.display = "block";
    }

    changeTab = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    render() {
        return(
            <section>
                <div className="account-settings">
                    <div className="container">
                        <div class="tab">
                            <button class="tablinks active" onClick={ (event) => {this.changeTab(event, 'Home')} }>Home</button>
                            <button class="tablinks" onClick={ (event) => {this.changeTab(event, 'Deals')} }>Deals</button>
                            <button class="tablinks" onClick={ (event) => {this.changeTab(event, 'Upload')} }>Upload</button>
                            <button class="tablinks" onClick={ (event) => {this.changeTab(event, 'Service')} }>Service</button>
                            <button class="tablinks" onClick={ (event) => {this.changeTab(event, 'Issues')} }>Issues</button>
                        </div>

                        <div id="Home" class="tabcontent">
                            <h3>Home</h3>
                        </div>

                        <div id="Deals" class="tabcontent">
                            <h3>Deals</h3>
                        </div>

                        <div id="Upload" class="tabcontent">
                            <h3>Upload</h3>
                        </div>

                        <div id="Service" class="tabcontent">
                            <h3>Service</h3>
                        </div>

                        <div id="Issues" class="tabcontent">
                            <h3>Issues</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default AccountSettings;