import React from 'react';
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";

const Heading = ({name}) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <RiCheckboxMultipleBlankLine className='text-3xl' />
                <h1 className='text-2xl font-bold'>{name}</h1>
            </div>
        </div>
    );
};

export default Heading;