import React, { useState } from 'react';
import Heading from '../../../Components/Heading';
import useNews from '../../../Data/useNews';
import Card from '../../../Components/Card';
import MiniCard from '../../../Components/MiniCard';

const National = () => {
    const { newses } = useNews();

    // Filter national news (category ID 3)
    const nationalNews = Array.isArray(newses)
        ? newses.filter(news => news.category?.id === 3)
        : [];

    const national = nationalNews.slice(0, 3);

    // Sort by latest
    const latest = [...nationalNews].sort(
        (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );

    // Sort by most viewed (trending)
    const trending = [...nationalNews].sort((a, b) => {
        if (b.viewCount !== a.viewCount) {
            return b.viewCount - a.viewCount;
        }
        return new Date(b.publishDate) - new Date(a.publishDate);
    });

    const [selectedTab, setSelectedTab] = useState('latest');
    const filterNews = selectedTab === 'latest' ? latest : trending;

    return (
        <div>
            <Heading name="জাতীয়" />
            <div className="mt-5">
                {national.length >= 3 ? (
                    <div className="flex flex-wrap justify-center gap-5">
                        {/* Left: Big Card */}
                        <div className="w-full md:w-5/12 mt-10">
                            <Card
                                thumbnail={national[0].thumbnail}
                                id={national[0].thumbnail}
                                title={national[0].title}
                                short_description={national[0].short_description}
                                width="w-full"
                            />
                        </div>

                        {/* Center: Two Small Cards */}
                        <div className="w-full md:w-3/12 flex flex-col gap-5 mt-10 border-x px-5 border-gray-300">
                            <Card
                                thumbnail={national[1].thumbnail}
                                id={national[1].thumbnail}
                                title={national[1].title}
                                short_description={national[1].short_description}
                                width="w-full"
                            />
                            <Card
                                thumbnail={national[2].thumbnail}
                                title={national[2].title}
                                id={national[2].thumbnail}
                                short_description={national[2].short_description}
                                width="w-full"
                            />
                        </div>

                        {/* Right: Sidebar */}
                        <div className="w-full md:w-3/12">
                            <div className="flex justify-center items-center gap-25 border-b mb-3">
                                <h1
                                    className={`font-semibold pb-1 cursor-pointer ${
                                        selectedTab === 'latest' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                    }`}
                                    onClick={() => setSelectedTab('latest')}
                                >
                                    সর্বশেষ
                                </h1>
                                <h1
                                    className={`font-semibold pb-1 cursor-pointer ${
                                        selectedTab === 'trending' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                    }`}
                                    onClick={() => setSelectedTab('trending')}
                                >
                                    পঠিত
                                </h1>
                            </div>
                            <div className="space-y-3">
                                {filterNews.slice(0, 5).map((news) => (
                                    <MiniCard
                                        key={news.id}
                                        id={news.id}
                                        thumbnail={news.thumbnail}
                                        title={news.title}
                                        width="w-60"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>জাতীয় সংবাদ লোড হচ্ছে...</p>
                )}
            </div>
        </div>
    );
};

export default National;
