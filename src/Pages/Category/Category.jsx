import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useNews from '../../Data/useNews';
import Card from '../../Components/Card';

const Category = () => {
    const { id } = useParams();
    const { newses } = useNews();

    const categoryId = parseInt(id); // Ensure it's a number

    // Memoize filtering and sorting for performance
    const filteredNews = useMemo(() => {
        if (!Array.isArray(newses)) return [];

        if (categoryId === 1) {
            // সর্বশেষ: Sort by newest first
            return [...newses].sort(
                (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
            );
        }

        if (categoryId === 2) {
            // সর্বাধিক পঠিত: Sort by view count (desc), then by date (desc)
            return [...newses].sort((a, b) => {
                if (b.viewCount !== a.viewCount) {
                    return b.viewCount - a.viewCount;
                }
                return new Date(b.publishDate) - new Date(a.publishDate);
            });
        }

        // Other categories: filter by category ID
        return newses.filter(news => news.category?.id === categoryId);
    }, [newses, categoryId]);

    return (
        <div className="mt-5">
            <div className="w-11/12 md:w-8/12 mx-auto">
                <div className="flex gap-10">
                    {/* News Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-9/12">
                        {filteredNews.length > 0 ? (
                            filteredNews.map(news => (
                                <Card
                                    key={news.id}
                                    id={news.id}
                                    thumbnail={news.thumbnail}
                                    title={news.title}
                                    short_description={news.short_description}
                                    width="w-full"
                                />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500">
                                এই ক্যাটাগরিতে কোন সংবাদ পাওয়া যায়নি।
                            </p>
                        )}
                    </div>

                    {/* Sidebar Ad */}
                    <div className="w-3/12 self-start sticky top-45 h-fit">
                        <img
                            src="https://s0.2mdn.net/sadbundle/17388607693865814722/gif.gif"
                            alt="Ad"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
