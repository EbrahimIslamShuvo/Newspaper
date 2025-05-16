import React, { useEffect, useState } from 'react';

const useCategory = () => {
    const [categories,setCategory] = useState(null)
    useEffect(()=>{
        fetch('/Category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return {categories}
};

export default useCategory;