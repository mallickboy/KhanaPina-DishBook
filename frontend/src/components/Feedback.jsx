import React from 'react';

const Feedback = ({ feedback, name }) => {
    return (
        <div className="bg-white rounded-xl px-6 mr-8 h-52 flex flex-col justify-around">
            <p className="text-black text-sm">
                "{feedback}"
            </p>
            <p className="text-red-500 text-lg font-black">- {name}</p>
        </div>
    );
};

export default Feedback;