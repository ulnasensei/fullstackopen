const Stats = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (good * 100) / all;
    return (
        <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {all}</p>
            <p>average: {average}</p>
            <p>positive: {positive}%</p>
        </>
    );
};

export default Stats;
