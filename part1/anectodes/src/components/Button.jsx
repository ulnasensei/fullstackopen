import React from "react";

const Button = ({ length, setSelected }) => {
    const handleClick = () => setSelected(() => Math.floor(Math.random() * length));
    return <button onClick={handleClick}>Next anectode</button>;
};

export default Button;
