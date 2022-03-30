import { forwardRef, memo } from 'react';
const StopWatchBtn = forwardRef(
    ({ id, backgroundColor, text, p, onClick }, ref) => (
        <button
            id={id}
            className={`${backgroundColor} rounded-full w-16 h-16 relative flex flex-col justify-center items-center cursor-pointer shadow-md`}
            onClick={onClick}
            ref={ref}
        >
            <p id="lap-reset-btn-label" className="text-base">
                {text}
            </p>
            <p className="text-xs">{p}</p>
        </button>
    )
);

export default memo(StopWatchBtn);
