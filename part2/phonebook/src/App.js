import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas", phone: "123889" }]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter {...{ persons, setSearch, search, searchResults, setSearchResults }} />
            <h2>add a new contact</h2>
            <PersonForm {...{ persons, setPersons, newName, setNewName, newPhone, setNewPhone }} />
            <h2>Numbers</h2>
            <Persons persons={persons} />
        </div>
    );
};

export default App;
