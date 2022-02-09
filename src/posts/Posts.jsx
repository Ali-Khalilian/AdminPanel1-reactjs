import { useEffect, useState, useContext } from "react";
import jpAxios from "../jpAxios";
import swal from "sweetalert";
import { deleteUserHandler } from "../userServices/UserServices";
import CommentModal from "../contexts/CommentModal";
import { useNavigate } from "react-router";
import CommentsData from "../contexts/CommentsData";


const Post = () => {

    const navigate = useNavigate();

    const [mainPosts, setMainPosts] = useState([]);

    const [posts, setPosts] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    const { setShowComments } = useContext(CommentModal);

    const [commentsJ, setCommentJ] = useState([]);

    const {commentsDatas,setCommentsDatas}=useContext(CommentsData);

    useEffect(() => {
        jpAxios.get(`/posts`)
            .then(res => {
                setMainPosts(res.data);
                setPosts(res.data);
            })
            .catch(err => alert(err));


        jpAxios.get(`/comments`).then(res => setCommentJ(res.data));


    }, []);

    const searchHandler = () => {
        if (searchValue > 0) {
            setPosts(mainPosts.filter(post => post.userId == searchValue));
        } else {
            setPosts(mainPosts);
        }
    };

    useEffect(() => {
        searchHandler();
    }, [searchValue]);

    const deleteHandler = (userId) => {
        swal({
            title: "Delete user post !",
            text: `Are you sure for delete post ${userId} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    deleteUserHandler(userId, posts, setPosts, "posts")
                } else {
                    swal("Post has been saved !");
                }
            })
    };

    const moreInfo = (id) => {
        swal(`Hi this section is for more information of post ${id} ...`);
    };



    const commentHandler = (id) => {
        const userComments = commentsJ.filter(cm => cm.postId == id);
        setCommentsDatas(userComments);
        setShowComments(true);

    }




    return (
        <div className="m-5 ">
            <h4 className="text-center HeaderPage">Posts</h4>
            <div className="row d-flex justify-content-between my-4">
                <div className="col-8 col-md-6 col-lg-4">
                    <input type="number" className="form-control bg-dark text-light" placeholder="search..." onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <button className="btn bg-success m-1 " onClick={() => navigate(`/posts/addPost`)}><i className="text-light fa fa-plus"></i></button>
                    <button className="btn btn-danger m-1" onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
            <div className="row">
                {
                    posts.length ?
                        posts.map(post => (
                            <div key={Math.random()} className="col-sm-12 col-md-6 col-lg-3 my-1 postCard d-flex align-items-stretch">
                                <div className="card bg-dark text-light">
                                    <div className="iduser bg-light text-dark text-center p-1 m-1 mb-0">{post.id}</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">User {post.userId}</h6>
                                        <p className="card-text">{post.body}</p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <i className="fa fa-edit pointer text-info edit" onClick={()=>navigate(`/posts/addPost/${post.id}`)}></i>
                                            <i className="fa fa-comment pointer text-secondary comment" onClick={() => commentHandler(post.id)}></i>
                                            <i className="fa fa-ellipsis-h moreInfo text-primary pointer" title="More Info" onClick={() => moreInfo(post.id)}></i>
                                            <i className="fa fa-trash text-danger trash pointer" onClick={() => deleteHandler(post.id)}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                        :
                        <h4 className="text-center mt-4">Loading...</h4>
                }
            </div>
        </div>
    )
};

export default Post;