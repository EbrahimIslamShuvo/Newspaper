import React from 'react';
import useNews from '../../../Data/useNews';
import Card from '../../../Components/Card';
import { NavLink } from 'react-router-dom';

const MiddleUp = () => {
    const { newses } = useNews();

    // Sort and slice only if `newses` is a valid array
    const sortedNewses = Array.isArray(newses)
        ? [...newses].sort((a, b) => {
            if (b.viewCount !== a.viewCount) {
                return b.viewCount - a.viewCount;
            }
            return new Date(b.publishDate) - new Date(a.publishDate);
        })
        : [];

    const topNews = sortedNewses.slice(0, 5);

    return (
        <div>
            <div>
                <div>
                    <div>
                        {topNews.length > 0 ? (
                            <div className="grid justify-center items-center">
                                <div className='flex flex-col justify-center items-center mt-5 pb-5 border-b border-gray-300'>
                                    <img className='w-150' src={topNews[0].thumbnail} alt={topNews[0].title} />
                                    <NavLink to={`/news/${topNews[0].id}`} className='font-semibold text-xl text-center mt-5'>{topNews[0].title}</NavLink>
                                    <p className='text-gray-500 mt-3'>{topNews[0].short_description}</p>
                                </div>
                                <div className="flex items-center justify-center gap-5 mt-5 border-b pb-5 border-gray-300">
                                    <div className="">
                                        <Card id={`${topNews[1].id}`} thumbnail={`${topNews[1].thumbnail}`} title={`${topNews[1].title}`} short_description={`${topNews[1].short_description}`} width={`w-100`}></Card>
                                    </div>
                                    <div className="">
                                        <Card id={`${topNews[2].id}`} thumbnail={`${topNews[2].thumbnail}`} title={`${topNews[2].title}`} short_description={`${topNews[0].short_description}`} width={`w-70`}></Card>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className=" border-b pb-5 border-gray-300">
                                        <Card id={`${topNews[3].id}`}  title={`${topNews[3].title}`} short_description={`${topNews[0].short_description}`}></Card>
                                    </div>
                                    <div className=" border-b pb-5 border-gray-300">
                                        <Card id={`${topNews[4].id}`}  title={`${topNews[4].title}`} short_description={`${topNews[0].short_description}`}></Card>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Loading top news...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleUp;
