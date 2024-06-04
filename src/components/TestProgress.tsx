import React from 'react';
import { useTestStore } from '../store';

const TestProgress: React.FC = () => {
    const { questions, currentQuestionIndex } = useTestStore();

    return (
        <div className="mb-4">
            <p className="mb-2 text-sm text-gray-600 text-center">
                Вопрос {currentQuestionIndex + 1} из {questions.length}
            </p>
            <div className="flex justify-center items-center space-x-1">
                {questions.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 flex-1 ${
                            index < currentQuestionIndex
                                ? 'bg-green-500'
                                : index === currentQuestionIndex
                                    ? 'bg-blue-500'
                                    : 'bg-gray-300'
                        } rounded transition duration-300 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TestProgress;
