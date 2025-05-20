import React from 'react';
import { useParams } from 'react-router-dom';
import useNews from '../../Data/useNews';
import LeftUp from '../Home/Components/LeftUp';
import Card from '../../Components/Card';
import { RiQuillPenAiLine } from "react-icons/ri";
import { BsVectorPen } from "react-icons/bs";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { LuTimer } from "react-icons/lu";
import Heading from '../../Components/Heading';
import MiniCardTwo from '../../Components/MiniCardTwo';


const SingleNews = () => {
    const { id } = useParams();
    const { newses } = useNews();

    // Find the single news item by ID
    const news = Array.isArray(newses)
        ? newses.find(item => item.id === parseInt(id))
        : null;

    // Get other news in the same category
    const relatedNews = Array.isArray(newses) && news?.category?.id
        ? newses.filter(item => item.category?.id === news.category.id && item.id !== news.id)
        : [];
    const sortedNewses = Array.isArray(newses)
        ? [...newses].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        : [];

    const latestNews = sortedNewses.slice(0, 3)

    return (
        <div className="w-11/12 md:w-8/12 mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">

                {/* Main News Content */}
                <div className="w-full lg:w-9/12 mt-20">
                    {news ? (
                        <div className="space-y-5">
                            <div className="flex items-center gap-2 text-xl font-semibold">
                                <RiQuillPenAiLine />
                                <p>{(news.category).name}</p>
                            </div>
                            <h1 className="text-4xl leading-13 font-bold">{news.title}</h1>
                            <div className="flex justify-start md:gap-20 gap-10 text-gray-500 -mt-5">
                                <div className="flex items-center gap-1">
                                    <BsVectorPen />
                                    <p>{news.reporter}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MdOutlineTipsAndUpdates />
                                    <p>{news.publishDate}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <LuTimer />
                                    <p>{news.readingTime}</p>
                                </div>
                            </div>
                            <img className="w-full rounded -mt-2" src={news.thumbnail} alt={news.title} />
                            <div className=" flex flex-col gap-5 w-11/12 mx-auto text-justify mt-10">
                                <p className="text-3xl font-bold text-start">{news.subtitle}</p>
                                <p className='text-gray-600'>{news.description_1}</p>
                                <img className='w-80 mx-auto' src="https://s0.2mdn.net/sadbundle/17388607693865814722/gif.gif" alt="" />
                                <p className='text-gray-600'>{news.description_2}</p>
                                <p className='text-gray-600'>{news.description_3}</p>
                                <img className='w-80 mx-auto' src="https://s0.2mdn.net/sadbundle/17388607693865814722/gif.gif" alt="" />
                                <p className='text-gray-600'>{news.description_4}</p>
                                <div className="flex items-center gap-2">
                                    <p className='text-gray-600'>বিষয়:</p>
                                    <div className="flex items-center gap-2.5">
                                        {
                                            (news.tags).map(tag => (
                                                <p className='bg-sky-100 p-2 rounded text-sm md:text-base'>{tag}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>সংবাদ পাওয়া যায়নি।</p>
                    )}
                </div>

                {/* Related News */}
                <div className="w-full lg:w-3/12 mt-15">
                    <div className="flex justify-center items-start">
                        <img className='mb-10' src="https://s0.2mdn.net/sadbundle/17388607693865814722/gif.gif" alt="" />
                    </div>
                    <h2 className="text-lg font-semibold mb-3 border-b pb-2">এই বিভাগের অন্যান্য সংবাদ</h2>
                    <div className="space-y-4">
                        {relatedNews.slice(0, 5).map(item => (
                            <Card
                                key={item.id}
                                title={item.title}
                                id={item.id}
                                short_description={item.short_description}
                                thumbnail={item.thumbnail}
                                width="w-full"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Heading name={"সর্বশেষ"}></Heading>
                <div className="mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                    {
                        latestNews.map(news => (
                            <div className="">
                                <MiniCardTwo id={news.id} width={"w-96"} height={"h-25"} thumbnail={news.thumbnail} title={news.title}></MiniCardTwo>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleNews;
