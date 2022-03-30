const formatString = (num) => (num < 10 ? '0' + num : num);

const formatTime = (centisecond) => {
    const min = parseInt(centisecond / 6000);
    const sec = parseInt((centisecond - 6000 * min) / 100);
    const centisec = centisecond % 100;
    const formattedString = `${formatString(min)}:${formatString(
        sec
    )}.${formatString(centisec)}`;
    return formattedString;
};

export default formatTime;
