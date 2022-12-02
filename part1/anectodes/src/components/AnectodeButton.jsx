const AnectodeButton = ({ length, setSelected }) => {
    const handleClick = () => setSelected(() => Math.floor(Math.random() * length));
    return <button onClick={handleClick}>Next anectode</button>;
};

export default AnectodeButton;
