import StatsLine from "./StatsLine";

const Stats = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = (good * 100) / all;
    return (
        <>
            <StatsLine text={"good"} value={good} />
            <StatsLine text={"neutral"} value={neutral} />
            <StatsLine text={"bad"} value={bad} />
            <StatsLine text={"all"} value={all} />
            <StatsLine text={"average"} value={average} />
            <StatsLine text={"positive"} value={positive} />
        </>
    );
};

export default Stats;
