import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    const addPerson = (event) => {
        event.preventDefault();
        persons.filter((person) => newName === person.name)
            ? alert(`${newName} is already added to the Phonebook.`)
            : setPersons(persons.concat({ name: newName }));
        setNewName("");
    };
    const handleChange = (event) => {
        event.preventDefault();
        setNewName(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:{" "}
                    <input
                        type={"text"}
                        name="name"
                        value={newName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <p key={person.name}>{person.name}</p>
            ))}
        </div>
    );
};

export default App;
