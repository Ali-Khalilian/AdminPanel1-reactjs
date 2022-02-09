import { useNavigate, useParams } from "react-router";
import { useEffect, useState, Fragment } from "react";
import jpAxios from "../jpAxios";
import { updateUserService, setUserService } from "../userServices/UserServices";

const AddPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [data, setData] = useState({
        userId: "",
        id: "",
        title: "",
        body: ""
    });

    const postHandle = (e) => {
        e.preventDefault();
        if (postId) {
            updateUserService(`posts`, data, postId);
        } else {
            setUserService("posts",data);
        }
    };


    useEffect(() => {
        jpAxios.get(`/users`)
            .then(res => setUsers(res.data))
            .catch(err => alert(err));
        if (postId) {
            jpAxios.get(`/posts/${postId}`)
                .then(res => setData(res.data))
                .catch(err => alert(err));
        }
    }, []);

    return (
        <Fragment>
            <h4 className="text-center HeaderPage mt-5">
                {
                    postId ? "Edit Post" : "Add Post"
                }
            </h4>
            <div className="container addUserForm bg-dark text-light rounded mt-4 p-4 w-50">
                <form onSubmit={postHandle}>
                    <div className="form-group">
                        <label className="form-label">User :</label>
                        <select required className="form-control pointer" value={data.userId} onChange={(e) => setData({ ...data, userId: e.target.value })}>
                            <option value="">Select one user</option>
                            {
                                users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">UserId :</label>
                        <input required type="number" className="form-control" value={data.userId} onChange={(e) => setData({ ...data, userId: e.target.value })} />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Title :</label>
                        <input required type="text" className="form-control" value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} />
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Body :</label>
                        <textarea required rows={5} type="text" className="form-control" value={data.body} onChange={(e) => setData({ ...data, body: e.target.value })}></textarea>
                    </div>
                    <div className="buttons mt-2 d-flex">
                        <button type="submit" className="btn btn-success m-1 mb-0">{postId ? "Edit Post" : "Add"}</button>
                        <button className="btn btn-danger m-1 mb-0" onClick={() => navigate(`/posts`)}>Back</button>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

export default AddPost;