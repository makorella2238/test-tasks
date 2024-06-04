import React from 'react';

interface ShortAnswerQuestionProps {
    question: string;
    onAnswer: (answer: string) => void;
}

const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({ question, onAnswer }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <p className="mb-4 text-lg font-semibold">{question}</p>
            <input
                type="text"
                onChange={(e) => onAnswer(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded w-full focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default ShortAnswerQuestion;
