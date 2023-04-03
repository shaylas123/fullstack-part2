import personsService from '../services/persons'
const ShowPersons = ({persons, search, setPersons}) => {
  
  
  const deletePerson = (personToDelete) => {
      if (window.confirm(`Delete ${personToDelete.name} ?`)) {
        personsService
        .deleteFromDB(personToDelete.id)
        .then(empty => {
          setPersons(persons.filter((person) => person.id !== personToDelete.id))
        })
      }
  }
  

    let personsList = [];
    if (search !== '') {
      personsList = persons.filter(person => person.name.startsWith(search));
    } else {
      personsList = persons;
    }
  
    return (
      <ul>
        {personsList.map(person => 
        <li key={person.name}>
          { person.name }
          <button onClick={() => deletePerson(person)}>delete</button>
        </li>)}
      </ul>
    )
  }
  export default ShowPersons