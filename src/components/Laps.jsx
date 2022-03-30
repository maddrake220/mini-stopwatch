import formatTime from '../utils/formatTime';
import { memo } from 'react';

const Labs = ({ laps }) => {
    const lapTimeArr = laps.reduce((acc, cur) => [...acc, cur[1]], []);
    const maxIdx = lapTimeArr.lastIndexOf(Math.max(...lapTimeArr));
    const minIdx = lapTimeArr.lastIndexOf(Math.min(...lapTimeArr));

    const minMaxStyle = (idx) => {
        if (laps.length < 2) return;
        if (idx === maxIdx) {
            return 'text-red-600';
        }
        if (idx === minIdx) {
            return 'text-green-600';
        }
        return '';
    };

    return (
        <article className="text-gray-600 h-64 overflow-auto border-t-2">
            <ul id="laps">
                {laps?.map(([lapCount, lapTime], idx) => {
                    return (
                        <li
                            className={`flex justify-between py-2 px-3 border-b-2 ${minMaxStyle(
                                idx
                            )}`}
                            key={lapCount}
                        >
                            <span>랩 {lapCount}</span>
                            <span>{formatTime(lapTime)}</span>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default memo(Labs);
