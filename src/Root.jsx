import React from 'react';
import MainNav from './Components/MainNav';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

const Root = () => {
    return (
        <div>
            <div className=" sticky top-0 bg-white z-50">
                <MainNav></MainNav>
            </div>
            <div className="mt-2">
                <img className='mx-auto' src="https://tpc.googlesyndication.com/simgad/3971471824697589924" alt="" />
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;