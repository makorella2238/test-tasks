import React from 'react';

interface LongAnswerQuestionProps {
    question: string;
    onAnswer: (answer: string) => void;
}

const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({ question, onAnswer }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <p className="mb-4 text-lg font-semibold">{question}</p>
            <textarea
                onChange={(e) => onAnswer(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded w-full h-32 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300 ease-in-out"
            />
        </div>
    );
};

export default LongAnswerQuestion;
