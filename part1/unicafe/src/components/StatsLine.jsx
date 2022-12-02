import React from "react";

const StatsLine = ({ text, value }) => {
    return (
        <p>
            {text}: {value}
        </p>
    );
};

export default StatsLine;
