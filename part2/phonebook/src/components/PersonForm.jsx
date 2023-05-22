import personService from "../services/personService";

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  setNotificationStatus,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    const existingPersons = persons.filter((person) => newName === person.name);
    if (Boolean(existingPersons.length)) {
      const existingPerson = existingPersons[0];
      if (
        window.confirm(
          `${existingPerson.name} is already added to the Phonebook, replace the old number with the new one?`
        )
      ) {
        personService
          .updatePerson(existingPerson.id, { name: newName, number: newPhone })
          .then((response) => {
            console.log(response);
            setNotificationStatus({
              message: `Updated ${newName}.`,
              type: "SUCCESS",
            });
            setTimeout(() => {
              setNotificationStatus({ message: null, type: null });
            }, 5000);
          })
          .catch((error) => {
            console.log(error.response.data.error)
            setNotificationStatus({
              message: `Update failed. ${error.response.data.error}`,
              type: "ERROR",
            });
            setTimeout(() => {
              setNotificationStatus({ message: null, type: null });
            }, 5000);
          })
          .finally(() =>
            personService.getAll().then((data) => setPersons(data))
          );
      }
      return;
    }
    const person = {
      name: newName,
      number: newPhone,
      id: persons.slice(-1).id + 1,
    };
    personService
      .createPerson(person)
      .then((data) => {
        console.log(data);
        setNotificationStatus({
          message: `Added ${newName}.`,
          type: "SUCCESS",
        });
        setTimeout(() => {
          setNotificationStatus({ message: null, type: null });
        }, 5000);
      })
      .catch((error) => {
        console.log(error.response.data.error)
        setNotificationStatus({
          message: error.response.data.error,
          type: "ERROR",
        });
        setTimeout(() => {
          setNotificationStatus({ message: null, type: null });
        }, 5000);
      })
      .finally(() => {
        personService.getAll().then((data) => setPersons(data));
      });
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
