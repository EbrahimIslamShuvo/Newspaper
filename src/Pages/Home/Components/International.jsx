import React from 'react';
import Heading from '../../../Components/Heading';
import useNews from '../../../Data/useNews';
import Card from '../../../Components/Card'; 

const International = () => {
    const { newses } = useNews();

    const politicsNews = Array.isArray(newses)
        ? newses.filter(news => news.category?.id === 6)
        : [];

        const Politics = politicsNews.slice(0,3)
    return (
        <div>
            <div>
                <Heading name="বিশ্ব সংবাদ" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {Politics.map(news => (
                    <Card
                        key={news.id}
                        id={news.id}
                        thumbnail={news.thumbnail}
                        title={news.title}
                        short_description={news.short_description}
                        width="w-full"
                    />
                ))}
            </div>
        </div>
    );
};

export default International;
