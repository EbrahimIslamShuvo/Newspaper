import React, { useState } from 'react';
import MainNav from './Components/MainNav';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import SideBar from './Components/SideBar';

const Root = () => {
    const [visibility, setVisibility] = useState("hidden");

    const activeSideBar = (visibilityState) => {
        setVisibility(visibilityState);
    };
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <div className="flex">
                <div className=" sticky top-0 h-fit">
                    <SideBar visibility={visibility} activeSideBar={activeSideBar}></SideBar>
                </div>
                <div className="">
                    <div className=" sticky top-0 bg-white z-50">
                        <MainNav activeSideBar={activeSideBar}></MainNav>
                    </div>
                    <div className="mt-2 w-full md:w-10/12 md:mx-auto lg:w-full" >
                        <img className='mx-auto' src="https://tpc.googlesyndication.com/simgad/3971471824697589924" alt="" />
                    </div>
                    <Outlet></Outlet>
                    <Footer></Footer>F
                </div>
            </div>
        </div>
    );
};

export default Root;