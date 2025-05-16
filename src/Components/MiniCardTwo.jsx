import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniCardTwo = ({ thumbnail, title, width, height, short_description , id }) => {
    return (
        <div className='flex gap-5'>
            <div>
                <img className={`${width} ${height} object-cover rounded`} src={thumbnail} alt={title} />
            </div>
            <div className="">
                <NavLink to={`/news/${id}`}  className="font-semibold">{title}</NavLink>
                <p>{short_description}</p>
            </div>
            
        </div>
    );
};

export default MiniCardTwo;
