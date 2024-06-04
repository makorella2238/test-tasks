import {create} from 'zustand';

interface Question {
    type: 'singleChoice' | 'multipleChoice' | 'shortAnswer' | 'longAnswer';
    text: string;
    options?: string[];
}

interface TestState {
    questions: Question[];
    currentQuestionIndex: number;
    answers: (string | string[])[];
    setAnswer: (index: number, answer: string | string[]) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
}

export const useTestStore = create<TestState>((set) => ({
    questions: [
        { type: 'singleChoice', text: 'Какой метод используется для обработки асинхронных операций в JavaScript?', options: ['setTimeout', 'Promise', 'forEach'] },
        { type: 'multipleChoice', text: 'Какие из следующих библиотек относятся к React?', options: ['Redux', 'Angular', 'Vue', 'React Router'] },
        { type: 'shortAnswer', text: 'Какое значение имеет this в стрелочной функции?' },
        { type: 'longAnswer', text: 'Опишите процесс рендеринга компонента в React, начиная с момента вызова функции render() до отображения компонента на странице.' },
        { type: 'singleChoice', text: 'Какой тег используется для создания ссылки в HTML?', options: ['<link>', '<a>', '<href>'] },
        { type: 'multipleChoice', text: 'Какие из следующих утверждений о CSS Grid являются верными?', options: ['Grid позволяет создавать сложные макеты', 'Grid заменяет Flexbox', 'Grid работает только в современных браузерах', 'Grid можно использовать для выравнивания элементов'] },
        { type: 'shortAnswer', text: 'Что такое Virtual DOM в React и как он работает?' },
        { type: 'longAnswer', text: 'Объясните разницу между state и props в React. В каких случаях следует использовать каждый из них?' },
        { type: 'singleChoice', text: 'Какой из следующих методов не является методом массивов в JavaScript?', options: ['map', 'filter', 'reduce', 'assign'] },
        { type: 'multipleChoice', text: 'Какие из следующих событий являются событиями мыши в JavaScript?', options: ['click', 'keydown', 'mouseover', 'mouseup'] }
    ],
    currentQuestionIndex: 0,
    answers: [],
    setAnswer: (index, answer) => set((state) => {
        const newAnswers = [...state.answers];
        newAnswers[index] = answer;
        return { answers: newAnswers };
    }),
    nextQuestion: () => set((state) => ({
        currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1)
    })),
    prevQuestion: () => set((state) => ({
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0)
    })),
}));