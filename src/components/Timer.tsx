import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const Timer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(900); // 15 минут
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/results'); // Перенаправить на страницу результатов по истечении времени
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Осталось времени: {formatTime(timeLeft)}</p>
        </div>
    );
};

export default Timer;
