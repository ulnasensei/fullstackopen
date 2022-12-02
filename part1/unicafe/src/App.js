import { useState } from "react";
import Buttons from "./components/Buttons";
import Stats from "./components/Stats";

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>Give Feedback</h1>
            <Buttons {...{ setGood, setNeutral, setBad }} />
            <h2>Stats</h2>
            {Boolean(good + neutral + bad) ? (
                <Stats {...{ good, bad, neutral }} />
            ) : (
                <p>No feedback.</p>
            )}
        </div>
    );
};

export default App;
