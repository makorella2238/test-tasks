import React from 'react';

interface MultipleChoiceQuestionProps {
    question: string;
    options: string[];
    onSelect: (answers: string[]) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question, options, onSelect }) => {
    const handleChange = () => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="multipleChoice"]');
        const selectedOptions = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        onSelect(selectedOptions);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <p className="mb-4 text-lg font-semibold">{question}</p>
            {options.map(option => (
                <div key={option} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        name="multipleChoice"
                        value={option}
                        onChange={handleChange}
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
};

export default MultipleChoiceQuestion;
