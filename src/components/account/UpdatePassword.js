import React from 'react';
import '../../assets/css/updatepassword.css';
// import { Link } from 'react-router-dom';

class UpdatePassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            editType: 'main'
        };
    } 

    componentDidMount() {
        console.log("UpdatePassword");

        this.setState({
            loading: true 
        });
    }

    changeEditType = (type) => {
        this.setState({
            editType: type
        })
    }

    render() {
        return(
            <section className="update p-5">
                {
                    this.state.editType == 'main' ?
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8">
                            <div className="row border-bottom py-3">
                                <div className="col-10">
                                    <p><strong>Email:</strong></p>
                                    <p>sample@email.com</p>
                                </div>
                                <div className="col-2 text-right">
                                    <a className="btn btn-default bg-light" onClick={() => { this.changeEditType('email') }}>Edit</a>
                                </div>
                            </div>
                            <div className="row border-bottom py-3">
                                <div className="col-10">
                                    <p><strong>Password:</strong></p>
                                    <p>********</p>
                                </div>
                                <div className="col-2 text-right">
                                    <a className="btn btn-default bg-light" onClick={() => { this.changeEditType('password') }}>Edit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="row input justify-content-center">
                        <div className="col-4">
                            <h3>Change Password</h3>
                            <div className="row">
                                <div className="col-12">
                                    <label>Current Password</label>
                                    <input type="password" class="form-control" placeholder="Current Password"></input>
                                </div>

                                <div className="col-12">
                                    <label>New Password</label>
                                    <input type="password" class="form-control" placeholder="New Password"></input>
                                </div>

                                <div className="col-12">
                                    <label>Retype new Password</label>
                                    <input type="password" class="form-control" placeholder="Retype new Password"></input>
                                </div>

                                <div className="col-12 col-md-12 col-lg-12">
                                    <div className="pt-5 text-center">
                                        <a className="press mr-3"  onClick={() => { this.changeEditType('main') }}>Cancel</a>
                                        <a className="press">Save Changes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </section>
        );
    }
}
export default UpdatePassword;