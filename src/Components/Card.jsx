import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ thumbnail, title, short_description, width, id }) => {
    return (
        <div>
            <div>
                <img className={width} src={thumbnail} />
            </div>
            <div className="mt-3.5">
                <NavLink to={`/news/${id}`} className="font-semibold">{title}</NavLink>
            </div>
            <div className="mt-3 text-sm font-extralight text-gray-500">
                <p>{short_description}</p>
            </div>
        </div>
    );
};

export default Card;
