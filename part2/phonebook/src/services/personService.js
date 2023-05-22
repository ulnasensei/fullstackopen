import axios from "axios";

const BASE_URL = "/api/persons";

const getAll = () => axios.get(BASE_URL).then((response) => response.data);

const createPerson = (person) =>
  axios.post(BASE_URL, person).then((response) => response.data);

const deletePerson = (id) =>
  axios.delete(`${BASE_URL}/${id}`).then((response) => response.data);

const updatePerson = (id, person) =>
  axios.put(`${BASE_URL}/${id}`, person).then((response) => response.data);

const personService = {
  getAll,
  createPerson,
  deletePerson,
  updatePerson
};
export default personService;
