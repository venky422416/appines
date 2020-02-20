import React from 'react';
import { connect } from 'react-redux';
import { unAuthorised } from '../Store/Action';

const Dashboard = (props) => {
    const logoutUser = () => {
        props.unAuthorised();
        localStorage.removeItem("user");
    }
    return (
        <div className="container mt-5">
            <h3 className="text-center mt-5">Hello Hruday
                <button className=" btn btn-sm btn-danger float-right" onClick={logoutUser}>Logout</button>
            </h3>
            <div className="card mt-5">
                <div className="card-header">
                    Employee list
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.userData && props.userData.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userData: state.data
})
export default connect(mapStateToProps, { unAuthorised })(Dashboard);
