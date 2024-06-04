import React from 'react';

interface SingleChoiceQuestionProps {
    question: string;
    options: string[];
    onSelect: (answer: string) => void;
}

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({ question, options, onSelect }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <p className="mb-4 text-lg font-semibold">{question}</p>
            {options.map(option => (
                <div key={option} className="mb-2 flex items-center">
                    <input
                        type="radio"
                        name="singleChoice"
                        value={option}
                        id={option}
                        onChange={() => onSelect(option)}
                        className="mr-2"
                    />
                    <label
                        htmlFor={option}
                        className="text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out"
                    >
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}

export default SingleChoiceQuestion;
