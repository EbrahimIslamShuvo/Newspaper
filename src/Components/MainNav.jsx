import React from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import useCategory from '../Data/useCategory';
import { NavLink } from 'react-router-dom';


const MainNav = () => {
    const { categories } = useCategory();
    console.log(typeof (categories));
    console.log(categories);



    return (
        <div>
            <div className="">
                <div className="">
                    <div className="w-8/12 mx-auto">
                        <div className="flex items-center justify-between  py-3.5">
                            <div className="grid gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-1 border-1 rounded-full border-gray-200 hover:bg-gray-200">
                                        <HiOutlineBars3 className='text-2xl' />
                                    </div>
                                    <div className="">
                                        <FaSearch className='text-xl' />
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 font-bold ms-2.5">
                                    <SlCalender />
                                    <p>শুক্রবার, ১৬ মে ২০২৫, ২ জ্যৈষ্ঠ ১৪৩২</p>
                                </div>
                            </div>
                            <div className="">
                                <NavLink to={"/"}>
                                    <img className='w-70' src="https://cdn.ittefaqbd.com/contents/themes/public/style/images/logo.svg" alt="logo" />
                                </NavLink>
                            </div>
                            <div className="flex flex-col justify-end items-end gap-3">
                                <div className="flex items-center gap-3.5 text-xl">
                                    <BsTwitterX />
                                    <FaFacebookF />
                                    <IoLogoYoutube />
                                    <FaInstagram />
                                </div>
                                <div className="flex items-center">
                                    <p className='border-e border-gray-300 pe-3'>বাংলা কনভার্টার</p>
                                    <p className='border-e border-gray-300 px-3'>ই-পেপার</p>
                                    <p className='border-e border-gray-300 px-3'>আর্কাইভ</p>
                                    <p className='ps-3'>English</p>
                                </div>
                            </div>
                        </div>
                        <hr className='text-gray-400' />
                        <hr className='text-gray-400 mt-0.5' />
                    </div>
                    <div className="flex text-lg justify-between py-3 font-[500] w-8/12 mx-auto border-b border-gray-200 sticky top-0 h-fit">
                        {
                            categories?.map(category => (
                                <div className="relative group">
                                    <NavLink
                                        to={`/category/${category.id}`} // Assuming you have a dynamic URL for categories
                                        className="relative text-black"
                                    >
                                        {category.name}
                                        {/* Underline effect */}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full peer-focus:w-full peer-active:w-full"></span>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default MainNav;