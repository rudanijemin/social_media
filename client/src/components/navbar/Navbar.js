import React, { useRef, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router";
import Avatar from "../avatar/Avatar";
import "./Navbar.scss";
// import LoadingBar from 'react-top-loading-bar';
import {useDispatch, useSelector} from 'react-redux';

import { setLoading } from "../../redux/slices/appConfigSlice";


function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const loadingRef = useRef()
    const myProfile = useSelector(state => state.appConfigReducer.myProfile);

    function handleLogoutClicked() {

    // const [loading, setLoading] = useState(false);

    // function toggleLoadingBar() {
    //     if(loading) {
    //         setLoading(false);
    //         loadingRef.current.complete();
    //     } else {
    //         setLoading(true);
    //         loadingRef.current.continuousStart();
    //     }
    }

    return (
        <div className="Navbar">
            <div className="container">
                <h2 className="banner hover-link" onClick={() => navigate("/")}>
                    Social Media
                </h2>
                <div className="right-side">
                    <div
                        className="profile hover-link"
                        onClick={() => navigate(`/profile/${myProfile?._id}`)}
                    >
                        <Avatar src={myProfile?.Avatar?.url} />
                    </div>
                    <div className="logout hover-link" onClick={handleLogoutClicked}>
                        <AiOutlineLogout /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;