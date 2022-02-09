import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import jpAxios from "../jpAxios";
import { deleteUserHandler } from "../userServices/UserServices";

const User = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [mainUser, setMainUsers] = useState([]);

    useEffect(() => {
        jpAxios.get("/users")
            .then(res => {
                setUsers(res.data);
                setMainUsers(res.data);
            })
            .catch(err => alert(err));
    }, []);

    const handleDelete = (userId) => {
        swal({
            title: "Delete User !",
            text: `Are you sure for delete user ${userId} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUserHandler(userId, users, setUsers, "users")
                } else {
                    swal("User has been saved !");
                }
            });
    };

    const searchHandle = (e) => {
        setUsers(mainUser.filter(user => user.name.includes(e.target.value)));
    };

    return (
        <div className="container mt-5 p-4 ">
            <h4 className="text-center HeaderPage">Users</h4>
            <div className="row w-100 mx-0 mt-2 mb-4 d-flex justify-content-between">
                <div className="col-9 clo-md-6 col-lg-4 form-group p-0">
                    <input type="text" className="form-control bg-dark text-light" placeholder="search..." onChange={searchHandle} />
                </div>
                <div className="col-2">
                    <Link to="/user/add">
                        <button type="submit" className="btn btn-dark addBtn">
                            <i className="fa fa-user-plus"></i>
                        </button>
                    </Link>
                </div>
            </div>
            {users.length ? <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Activities</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <i className="fa fa-edit pointer py-0 mx-2 text-info" onClick={() => navigate(`/user/add/${user.id}`)}></i>
                                <i className="fa fa-trash pointer py-0 mx-2 text-danger" onClick={() => handleDelete(user.id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                :
                <h3 className="text-center mt-5">Loading...</h3>
            }
        </div>
    )
};

export default User;