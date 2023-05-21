import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";
import { useEffect } from "react";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notificationStatus, setNotificationStatus] = useState({
    message: null,
    type: null,
  });

  useEffect(() => {
    personService.getAll().then((response) => setPersons(response));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        {...{ persons, setSearch, search, searchResults, setSearchResults }}
      />
      <h2>add a new contact</h2>
      <Notification {...notificationStatus} />
      <PersonForm
        {...{
          persons,
          setPersons,
          newName,
          setNewName,
          newPhone,
          setNewPhone,
          setNotificationStatus,
        }}
      />
      <h2>Numbers</h2>
      {!!persons.length && (
        <Persons
          persons={persons}
          setPersons={setPersons}
          setNotificationStatus={setNotificationStatus}
        />
      )}
    </div>
  );
};

export default App;
