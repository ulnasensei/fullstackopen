const PersonForm = ({ persons, setPersons, newName, setNewName, newPhone, setNewPhone }) => {
    const addPerson = (event) => {
        event.preventDefault();
        Boolean(persons.filter((person) => newName === person.name).length)
            ? alert(`${newName} is already added to the Phonebook.`)
            : setPersons(
                  persons.concat({ name: newName, number: newPhone, id: persons.length + 1 })
              );
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
    return (
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
    );
};

export default PersonForm;
