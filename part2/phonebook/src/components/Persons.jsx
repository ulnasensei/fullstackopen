import personService from "../services/personService";
const Persons = ({ persons, setPersons }) => {
  const handleDelete = (event, person) => {
    const { name, id } = person;
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .deletePerson(id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert(
            `The person ${person.name} was already deleted from the server!`
          );
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
