import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
// import {axiosClient} from '../../utils/axiosClient';

function Home() {
  return(

    <>
             <Navbar />
            <div className="outlet" style={{ marginTop: "60px" }}>
                <Outlet />
            </div>
    </>  
  );
}

export default Home; 