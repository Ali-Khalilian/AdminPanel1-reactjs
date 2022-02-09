import { useContext, useState } from "react";
import MainContext from "./contexts/MainContext";
import { Route, Routes } from "react-router-dom";
import User from "./users/Users";
import Post from "./posts/Posts";
import Todos from "./works/Works";
import Gallery from "./gallery/Gallery";
import AddUser from "./users/AddUser";
import AddPost from "./posts/AddPost";

const Content = () => {
    const { showMenu, setShowMenu } = useContext(MainContext);

    const menuHandler = (event) => {
        event.stopPropagation();
        setShowMenu(!showMenu);
    }

    return (
        <div className="ContentContainer scroll d-block" onClick={() => setShowMenu(false)}>
            <i className="fa fa-bars bg-dark text-light p-2 pointer bar-icon d-md-none bar-icon" onClick={menuHandler}>
            </i>
            <Routes>
                <Route path="*" element={<User />} />
                <Route path="/" element={<User />} />
                <Route path="/posts" element={<Post />} />
                <Route path="/posts/addPost" element={<AddPost />}>
                    <Route path=":postId" />
                </Route>
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/todos" element={<Todos />} />
                <Route path="/user/add" element={<AddUser />}>
                    <Route path=":userId" />
                </Route>
            </Routes>
        </div>
    )
};

export default Content;