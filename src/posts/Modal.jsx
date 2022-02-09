import { useContext } from "react";
import CommentModal from "../contexts/CommentModal";
import CommentsData from "../contexts/CommentsData";

const Modal = () => {

    const { showComments, setShowComments } = useContext(CommentModal);

    const { commentsDatas } = useContext(CommentsData);


    if (!showComments) {
        return null;
    }
    else {
        return (
            <div className="modal-container">
                <div className="comment-modal scroll">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className=" modal-title">Comments</h4>
                        <i className="pointer fa-2x text-danger mb-1" onClick={() => setShowComments(false)}>&times;</i>
                    </div>
                    <hr className="mt-2" />
                    <div className="modal-body">
                        <ul className="list-group">
                          {
                              commentsDatas.map(cm=>(
                                <li key={cm.id} className="list-group-item my-1 pointer comment-item">
                                <p>
                                    <span className="text-info">
                                        Name :
                                    </span>
                                    {` ${cm.name}`}
                                </p>
                                <p>
                                    <span className="text-info">
                                        Comment Text :
                                    </span>
                                    {` ${cm.body}`}
                                </p>
                            </li>                   
                              ))
                          }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

};

export default Modal;