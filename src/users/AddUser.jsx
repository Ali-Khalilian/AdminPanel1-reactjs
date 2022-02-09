import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { useNavigate, useParams } from "react-router";
import { updateUserService, setUserService } from "../userServices/UserServices";

const AddUser = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    });


    const addUser = (e) => {
        e.preventDefault();
        if (!userId) {
            setUserService("users", data);
        } else {
            updateUserService("users", data, userId);
        };
    };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => {
            setData({
                name: res.data.name,
                username: res.data.username,
                email: res.data.email,
                address: {
                    street: res.data.address.street,
                    city: res.data.address.city,
                    suite: res.data.address.suite,
                    zipcode: res.data.address.zipcode
                }
            })
        });
    }, []);

    return (
        <Fragment>
            <h4 className="text-center HeaderPage mt-5">
                {userId ? "Edit User" : "Add User"}
            </h4>
            <div className="addUserForm bg-dark text-light container mt-3 p-4 rounded">
                <form onSubmit={addUser}>
                    <div className="form-group mb-3">
                        <label className="form-label" htmlFor="fullName">FullName :</label>
                        <input type="text" required className="form-control" id="fullName" placeholder="Enter Your FullName..." value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label" htmlFor="userName">UserName :</label>
                        <input type="text" required className="form-control" id="userName" placeholder="Enter Your UserName..." value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label" htmlFor="email">Email :</label>
                        <input type="email" required className="form-control" id="email" placeholder="Enter Your Email..." value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>

                    <label className="form-label">Address :</label>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mt-2">
                            <input type="text" required className="form-control" id="street" placeholder="Street" value={data.address.street} onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })} />
                        </div>
                        <div className="col-sm-12 col-md-6 mt-2">
                            <input type="text" required className="form-control" id="city" placeholder="City" value={data.address.city} onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 mt-2">
                            <input type="text" required className="form-control" id="suite" placeholder="Suite" value={data.address.suite} onChange={(e) => setData({ ...data, address: { ...data.address, suite: e.target.value } })} />
                        </div>
                        <div className="col-sm-12 col-md-6 mt-2">
                            <input type="text" required className="form-control" id="zipCode" placeholder="ZipCpde" value={data.address.zipcode} onChange={(e) => setData({ ...data, address: { ...data.address, zipcode: e.target.value } })} />
                        </div>
                    </div>

                    <div className="buttons mt-3 d-flex">
                        <button type="submit" className="btn btn-success">
                            {userId ? "Edit" : "Add"}
                        </button>
                        <button type="button" className="btn btn-danger mx-2" onClick={() => navigate(-1)}>Back</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

export default AddUser;





// <div className="form-row">
// <div className="col col-md-6">
//     <label className="form-label">Address :</label>
//     <input type="text" required className="form-control" id="street" placeholder="Street" value={data.address.street} onChange={(e) => setData({ ...data, address: { ...data.address, street: e.target.value } })} />
// </div>
// <div className="col col-md-6">
//     <input type="text" required className="form-control" id="city" placeholder="City" value={data.address.city} onChange={(e) => setData({ ...data, address: { ...data.address, city: e.target.value } })} />
// </div>
// </div>
// <div className="form-row">
// <div className="col-md-6">
//     <input type="text" required className="form-control" id="suite" placeholder="Suite" value={data.address.suite} onChange={(e) => setData({ ...data, address: { ...data.address, suite: e.target.value } })} />
// </div>
// <div className="col-md-6">
//     <input type="text" required className="form-control" id="zipCode" placeholder="ZipCpde" value={data.address.zipcode} onChange={(e) => setData({ ...data, address: { ...data.address, zipcode: e.target.value } })} />
// </div>
// </div>