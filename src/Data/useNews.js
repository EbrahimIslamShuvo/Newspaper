import React, { useEffect, useState } from 'react';

const useNews = () => {
    const [newses,setNews] = useState(null)
        useEffect(()=>{
            fetch('/News.json')
            .then(res => res.json())
            .then(data => setNews(data))
        },[])
        return {newses}
};

export default useNews;