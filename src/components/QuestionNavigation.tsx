import React from 'react';
import { useTestStore } from '../store';
import { useNavigate } from 'react-router-dom';

const QuestionNavigation: React.FC = () => {
    const { questions, currentQuestionIndex, nextQuestion, prevQuestion } = useTestStore();
    const navigate = useNavigate()

    const handleFinish = () => {
        // Здесь можно добавить логику для завершения тестирования, например, отправка результатов.
        navigate('/results'); // Перенаправление на страницу результатов.
    };

    return (
        <div className='flex justify-between mt-5'>
            <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
                className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 transition duration-300 ease-in-out'
            >
                Предыдущий
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
                <button
                    onClick={nextQuestion}
                    className='px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300 ease-in-out'
                >
                    Следующий
                </button>
            ) : (
                <button
                    onClick={handleFinish}
                    className='px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 ease-in-out'
                >
                    Завершить тестирование
                </button>
            )}
        </div>
    );
}

export default QuestionNavigation;
