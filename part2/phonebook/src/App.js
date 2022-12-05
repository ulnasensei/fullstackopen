import { useState } from "react";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "123889" }]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const addPerson = (event) => {
        event.preventDefault();
        Boolean(persons.filter((person) => newName === person.name).length)
            ? alert(`${newName} is already added to the Phonebook.`)
            : setPersons(persons.concat({ name: newName, phone: newPhone }));
        setNewName("");
        setNewPhone("");
    };
    const handleNameChange = (event) => {
        event.preventDefault();
        setNewName(event.target.value);
    };
    const handlePhoneChange = (event) => {
        event.preventDefault();
        setNewPhone(event.target.value);
    };
    const handleSearch = (event) => {
        setSearch(() => event.target.value);
        event.target.value === ""
            ? setSearchResults([])
            : setSearchResults(
                  persons.filter(
                      (person) =>
                          ~person.name.toLowerCase().indexOf(event.target.value.toLowerCase())
                  )
              );
    };
    const showSearchResults = () => {
        return (
            <>
                <br />
                {searchResults.map((result) => (
                    <p key={result.name}>
                        {result.name} - {result.phone}
                    </p>
                ))}
            </>
        );
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <input type="text" value={search} onChange={handleSearch} />
                {Boolean(searchResults.length) && showSearchResults()}
            </div>
            <h2>add a new contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:{" "}
                    <input
                        type={"text"}
                        name="name"
                        value={newName}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    phone:&nbsp;
                    <input
                        type="text"
                        name="phone"
                        value={newPhone}
                        onChange={handlePhoneChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <p key={person.name}>
                    {person.name} - {person.phone}
                </p>
            ))}
        </div>
    );
};

export default App;
