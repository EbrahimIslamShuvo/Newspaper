import React from 'react';
import Heading from '../../../Components/Heading';
import useNews from '../../../Data/useNews';
import Card from '../../../Components/Card';
import MiniCardTwo from '../../../Components/MiniCardTwo';

const Sports = () => {
    const { newses } = useNews();

    // Filter news where category ID is 7 (sports)
    const sportsNews = Array.isArray(newses)
        ? newses.filter(news => news.category?.id === 7)
        : [];

    // Sort trending by viewCount first, then by publishDate
    const trending = [...sportsNews].sort((a, b) => {
        if (b.viewCount !== a.viewCount) {
            return b.viewCount - a.viewCount;
        }
        return new Date(b.publishDate) - new Date(a.publishDate);
    });

    const topTrending = trending.slice(0, 2);
    const lessTrending = trending.slice(2);

    return (
        <div>
            <div className="mb-5">
                <Heading name="খেলাধুলা" />
            </div>
            <div className="flex justify-center gap-5">
                <div className="w-4/12">
                    {topTrending.length === 2 && (
                        <div className="">
                            <Card
                                thumbnail={topTrending[0].thumbnail}
                                title={topTrending[0].title}
                                id={topTrending[0].id}
                                short_description={topTrending[0].short_description}
                                width="w-140"
                            />
                            <MiniCardTwo
                                thumbnail={topTrending[1].thumbnail}
                                title={topTrending[1].title}
                                id={topTrending[1].id}
                                short_description={topTrending[1].short_description}
                                width="w-140"
                            />
                        </div>
                    )}
                </div>
                <div className="w-5/12 flex flex-col gap-10 border-x border-gray-300 px-5">
                    {lessTrending.map(news => (
                        <MiniCardTwo
                            key={news.id}
                            thumbnail={news.thumbnail}
                            title={news.title}
                            id={news.id}
                            short_description={news.short_description}
                            width="w-140"
                        />
                    ))}
                </div>
                <div className="w-3/12">
                    <img src="https://s0.2mdn.net/sadbundle/17388607693865814722/gif.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sports;
