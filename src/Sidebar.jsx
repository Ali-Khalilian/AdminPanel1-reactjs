import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MainContext from "./contexts/MainContext";

const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext);
    return (
        <div className="sidebar h-100 " style={showMenu ? { left: 0 } : {}}>
            <i className="fa fa-times close-sidebar bg-dark text-light rounded-circle pointer d-md-none" onClick={()=>setShowMenu(false)}></i>
            <ul className="list-group d-flex flex-direction-column align-items-center mt-5">
              
                <img src="./img/profile.jpg" title="Profile" className="rounded-circle mb-3 profile-img pointer" alt="user-profile" />
                
                <NavLink className={({ isActiv }) => { return isActiv ? "active" : "" }} to="/" className="text-light text-decoration-none w-75">
                    <li className="list-group-item  bg-dark text-light m-2 pointer">Users</li>
                </NavLink>
                <NavLink className={({ isActiv }) => { return isActiv ? "active" : "" }} to="/posts" className="text-light text-decoration-none w-75">
                    <li className="list-group-item  bg-dark text-light m-2 pointer">Posts</li>
                </NavLink>
                <NavLink className={({ isActiv }) => { return isActiv ? "active" : "" }} to="/gallery" className="text-light text-decoration-none w-75">
                    <li className="list-group-item  bg-dark text-light m-2 pointer">Gallery</li>
                </NavLink>
                <NavLink className={({ isActiv }) => { return isActiv ? "active" : "" }} to="/todos" className="text-light text-decoration-none w-75">
                    <li className="list-group-item  bg-dark text-light m-2 pointer">Todos</li>
                </NavLink>
            </ul>
            <div className="social-links w-100 d-flex justify-content-around">
                <i className=" fa fa-facebook pointer"></i>
                <i className=" fa fa-twitter pointer"></i>
                <i className=" fa fa-instagram pointer"></i>
                <i className=" fa fa-telegram pointer"></i>
            </div>
        </div>
    )
};

export default Sidebar;