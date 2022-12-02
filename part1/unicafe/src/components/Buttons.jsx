const Buttons = ({ setGood, setNeutral, setBad }) => {
    const handleGoodClick = () => setGood((current) => current + 1);
    const handleNeutralClick = () => setNeutral((current) => current + 1);
    const handleBadClick = () => setBad((current) => current + 1);
    return (
        <div>
            <button onClick={handleGoodClick}>Good</button>
            <button onClick={handleNeutralClick}>Neutral</button>
            <button onClick={handleBadClick}>Bad</button>
        </div>
    );
};

export default Buttons;
