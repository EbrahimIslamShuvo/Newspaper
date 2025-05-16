
import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniCard = ({ thumbnail, title, width, id }) => {
    return (
        <div>
            <div className='flex items-center gap-5'>
                <div className="mt-3.5">
                    <NavLink to={`/news/${id}`} className="font-semibold">{title}</NavLink>
            </div>
            <div>
                <img className={width} src={thumbnail} />
            </div>
        </div>
        </div >
    );
};

export default MiniCard;