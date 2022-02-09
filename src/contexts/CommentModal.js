import { createContext } from "react";

const CommentModal = createContext({
    showComments : false,
    setShowComments : () => { }
});

export default CommentModal;