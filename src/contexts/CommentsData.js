import { createContext } from "react";

const CommentsData = createContext({
    commentsDatas : [],
    setCommentsDatas : () => { }
});

export default CommentsData;