import personService from "../services/personService";
const Persons = ({ persons, setPersons, setNotificationStatus }) => {
  const handleDelete = (event, person) => {
    const { name, id } = person;
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then((response) => {
          console.log(response);
          setNotificationStatus({
            message: `Deleted ${name}.`,
            type: "SUCCESS",
          });
          setTimeout(() => {
            setNotificationStatus({ message: null, type: null });
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
          setNotificationStatus({
            message: `The person ${person.name} was already deleted from the server!`,
            type: "ERROR",
          });
          setTimeout(() => {
            setNotificationStatus({ message: null, type: null });
          }, 5000);
        })
        .finally(() => {
          personService.getAll().then((data) => {
            console.log(data);
            setPersons(data);
          });
        });
    }
  };
  return (
    <div>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} - {person.number}{" "}
          <button onClick={(event) => handleDelete(event, person)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
