import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/persons").then((response) => setPersons(response.data));
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter {...{ persons, setSearch, search, searchResults, setSearchResults }} />
            <h2>add a new contact</h2>
            <PersonForm {...{ persons, setPersons, newName, setNewName, newPhone, setNewPhone }} />
            <h2>Numbers</h2>
            {!!persons.length && <Persons persons={persons} />}
        </div>
    );
};

export default App;
