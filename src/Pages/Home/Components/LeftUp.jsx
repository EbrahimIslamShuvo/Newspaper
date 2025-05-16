import React from 'react';
import useNews from '../../../Data/useNews';
import Card from '../../../Components/Card';

import Heading from '../../../Components/Heading';


const LeftUp = () => {
    const { newses } = useNews();

    const sortedNewses = Array.isArray(newses)
        ? [...newses].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        : [];

    const latestNews = sortedNewses.slice(0, 10)

    return (
        <div>
            <div className='mt-10'>
                <Heading name={"সর্বশেষ"}></Heading>
                <div className="">
                    {latestNews.map(news => (
                        <div className="border-b border-gray-400 pb-2">
                            <Card id={`${news.id}`} title={`${news.title}`}></Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeftUp;
