import React from 'react';

const ResultsPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
                <h2 className="text-2xl font-semibold mb-4">Тестирование завершено!</h2>
                <p className="text-gray-600 mb-4">
                    Вы успешно прошли тестирование. В скором времени вам поступят результаты.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
                >
                    Вернуться на главную
                </button>
            </div>
        </div>
    );
};

export default ResultsPage;
