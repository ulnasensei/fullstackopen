const VoteButton = ({ selected, pointsCopy, setPoints }) => {
    const handleClick = () => {
        pointsCopy[selected] += 1;
        setPoints(pointsCopy);
    };
    return <button onClick={handleClick}>Vote</button>;
};

export default VoteButton;
