import React from 'react';
import {useTestStore} from '../store';
import SingleChoiceQuestion from '../components/SingleChoiceQuestion';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import ShortAnswerQuestion from '../components/ShortAnswerQuestion';
import LongAnswerQuestion from '../components/LongAnswerQuestion';
import Timer from '../components/Timer';
import QuestionNavigation from '../components/QuestionNavigation';
import TestProgress from '../components/TestProgress';

const TestPage: React.FC = () => {
    const {questions, currentQuestionIndex, setAnswer} = useTestStore();
    const question = questions[currentQuestionIndex];

    const handleAnswer = (answer: string | string[]) => {
        setAnswer(currentQuestionIndex, answer);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-3xl mx-auto mt-8">
                <TestProgress/>
                <Timer/>
                <div className="p-4 rounded shadow bg-amber-50">
                    { question.type === 'singleChoice' && (
                        <SingleChoiceQuestion question={ question.text } options={ question.options || [] }
                                              onSelect={ handleAnswer }/>
                    ) }
                    { question.type === 'multipleChoice' && (
                        <MultipleChoiceQuestion question={ question.text } options={ question.options || [] }
                                                onSelect={ handleAnswer }/>
                    ) }
                    { question.type === 'shortAnswer' && (
                        <ShortAnswerQuestion question={ question.text } onAnswer={ handleAnswer }/>
                    ) }
                    { question.type === 'longAnswer' && (
                        <LongAnswerQuestion question={ question.text } onAnswer={ handleAnswer }/>
                    ) }
                </div>
                <QuestionNavigation/>
            </div>
        </div>
    )
};

export default TestPage;
