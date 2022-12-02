import StatsLine from "./StatsLine";

const Stats = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = ((good - bad) / all).toFixed(1);
    const positive = ((good * 100) / all).toFixed(1);
    return (
        <table>
            <tbody>
                <StatsLine text={"good"} value={good} />
                <StatsLine text={"neutral"} value={neutral} />
                <StatsLine text={"bad"} value={bad} />
                <StatsLine text={"all"} value={all} />
                <StatsLine text={"average"} value={average} />
                <StatsLine text={"positive"} value={positive + " %"} />
            </tbody>
        </table>
    );
};

export default Stats;
