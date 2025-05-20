import React from 'react';
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import useCategory from '../Data/useCategory';

const SideBar = ({visibility , activeSideBar}) => {
    const {categories} = useCategory()
    return (
        <div className={`min-h-screen w-55 md:w-70 rounded-r-2xl bg-base-300 p-5 ${visibility}`}>
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-semibold'>মেনু</h1>
                <ImCross onClick={()=>activeSideBar("hidden")} />
            </div>
            <div className="flex flex-col py-3 gap-5">
                <NavLink className="text-lg border border-gray-200 px-5 py-1.5 font-semibold hover:bg-white duration-500 hover:shadow-2xl shadow-gray-400 rounded-lg" to={"/"}>হোম</NavLink>
                {
                    categories?.map(category => (
                        <NavLink className="text-lg border border-gray-200 px-5 py-1.5 font-semibold hover:bg-white duration-500 hover:shadow-2xl shadow-gray-400 rounded-lg" to={`/category/${category.id}`}>{category.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBar;