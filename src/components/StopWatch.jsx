import { useEffect, useRef } from 'react';
import useTimer from '../hooks/useTimer';
import Labs from './Laps';
import StopWatchBtn from './StopWatchBtn';
import Timer from './Timer';

const StopWatch = () => {
    const { centisecond, start, pause, createLap, reset, isRunning, laps } =
        useTimer();
    const lapResetBtnReference = useRef(null);
    const startStopBtnReference = useRef(null);

    const triggerOnClick = (e) => {
        const keyCode = e.code;
        if (keyCode === 'KeyL') {
            return lapResetBtnReference.current.click();
        }
        if (keyCode === 'KeyS') {
            return startStopBtnReference.current.click();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', triggerOnClick);
        return () => {
            window.removeEventListener('keydown', triggerOnClick);
        };
    }, []);
    return (
        <section className="w-fit bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center m-auto mt-36 max-w-sm">
            <Timer centisecond={centisecond} />
            <div className="flex justify-between text-white pb-8 text-sm select-none">
                <StopWatchBtn
                    id={'lap-reset-btn'}
                    backgroundColor="bg-gray-600"
                    text={isRunning ? '랩' : '리셋'}
                    p={'L'}
                    onClick={isRunning ? createLap : reset}
                    ref={lapResetBtnReference}
                />
                <StopWatchBtn
                    id={'start-stop-btn'}
                    backgroundColor={isRunning ? 'bg-red-600' : 'bg-green-600'}
                    text={isRunning ? '중단' : '시작'}
                    p={'S'}
                    onClick={isRunning ? pause : start}
                    ref={startStopBtnReference}
                />
            </div>
            <Labs laps={laps} />
        </section>
    );
};

export default StopWatch;
