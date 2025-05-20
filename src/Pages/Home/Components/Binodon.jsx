import React from 'react';
import Heading from '../../../Components/Heading';
import useNews from '../../../Data/useNews';
import Card from '../../../Components/Card';
import MiniCardTwo from '../../../Components/MiniCardTwo';

const Binodon = () => {
    const { newses } = useNews();

    const binodonNews = Array.isArray(newses)
        ? newses.filter(news => news.category?.id === 8)
        : [];

        const binodon = binodonNews.slice(0,1)
        const leftbinodon = binodonNews.slice(1)
    return (
        <div>
            <div className="">
                <div className="">
                    <Heading name={"বিনোদন"}></Heading>
                </div>
                <div className="mt-5 flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                        {
                            binodon.map(news => <Card id={`${news.id}`} thumbnail={`${news.thumbnail}`} title={`${news.title}`} short_description={`${news.short_description}`} width={"w-full"}></Card>)
                        }
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-6">
                    {
                        leftbinodon.map(news => <MiniCardTwo id={`${news.id}`} thumbnail={`${news.thumbnail}`} title={`${news.title}`} short_description={`${news.short_description}`} width={"w-35"}></MiniCardTwo>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Binodon;