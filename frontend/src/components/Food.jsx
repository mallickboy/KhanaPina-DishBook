import React from 'react';

const Food = ({ filename }) => {
    return (
        <div className="mr-4">
            <img
                src={`/images/${filename}`}
                alt="Street Food"
                className="w-full h-full object-cover rounded-xl"
            />
        </div>
    );
};

export default Food;
