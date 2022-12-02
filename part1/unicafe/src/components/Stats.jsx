const Stats = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = (good * 100) / total;
    return (
        <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {total}</p>
            <p>average: {average}</p>
            <p>positive: {positive}%</p>
        </>
    );
};

export default Stats;
