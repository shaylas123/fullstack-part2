
// // 2.1-2.5
// import Course from "./components/Course"
// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   return courses.map(course => <Course key={course.id} course={ course } />)
// }


// export default App

//********************************************************************************************************* */
//2.6-2.17

// import { useState, useEffect } from 'react'
// import ShowPersons from './components/ShowPersons';
// import Filter from './components/Filter';
// import Form from './components/Form';
// import personsService from './services/persons'
// import Notification from './components/Notification';


// const App = () => {
//   const [persons, setPersons] = useState([]);
//   const [newName, setNewName] = useState('');
//   const [newPhoneNumber, setNewPhoneNumber] = useState('');
//   const [search, setSearch] = useState('');
//   const [addMessage, setAddMessage] = useState(null);
//   const [errMessage, setErrMessage] = useState(null);

//   //fetch persons from db 
//   useEffect(() => {
//     personsService
//       .getAll()
//       .then(initialPersons  => {
//         setPersons(initialPersons)
//       })
//   }, []);

  
//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   }

//   const HandleNameChange = (event) => {
//     setNewName(event.target.value);
//   }
  
//   const HandlePhoneNumberChange = (e) => {
//     setNewPhoneNumber(e.target.value);
//   }

//   const HandlePersonSubmition = (event) => {
//     event.preventDefault();

//     if (newName === '' || newPhoneNumber === '') {
//       alert("missing name or number");
//     }
//     else { 
//       const personObject = {
//         name: newName,
//         number: newPhoneNumber
//       }
//       const getPersonInBook = persons.find(person => person.name === newName);

//       if (!getPersonInBook) {
//         personsService
//           .create(personObject)
//           .then( newPerson => {
//             setNewName('');
//             setNewPhoneNumber('');
//             setAddMessage(`Added ${newPerson.name}`);
//             setTimeout(() => {
//               setAddMessage(null)
//             }, 5000);
//             setPersons(persons.concat(newPerson));

//           })
//       } else {
//         if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
//           personsService
//             .update(getPersonInBook.id , personObject)
//             .then(updatedPerson => {
//               setPersons(persons.map( person => person.id !== getPersonInBook.id ? person : updatedPerson))
//             }).catch(error => {
//               setErrMessage(`Information of ${newName} has already been removed from server`);
//               setTimeout(() => {
//                 setErrMessage(null)
//               }, 5000);
//               setPersons(persons.filter( person => person.id !== getPersonInBook.id))
//             })
//         } 
//       }

//     }
//   }


//   return (
//     <div>
//       <Notification addition={addMessage} err={errMessage}/>
//       <Filter value={search} handleSearch={handleSearch}/>
//       <h2>Phonebook</h2>
//       <Form 
//         newName={newName} 
//         HandleNameChange={HandleNameChange} 
//         newPhoneNumber={newPhoneNumber} 
//         HandlePhoneNumberChange={HandlePhoneNumberChange}
//         HandlePersonSubmition={HandlePersonSubmition}
//       />
//       <h2>Numbers</h2>
//         <ul>
//           <ShowPersons 
//            persons={persons} 
//            search={search}
//            setPersons={setPersons}
//           />
//         </ul>
//     </div>
//   )
// }

// export default App


// *************************************************************************** */

// import { useState, useEffect } from 'react'
// import Note from './components/Note'
// import noteService from './services/notes'
// import Notification from './components/Notification'

// const Footer = () => {
//   const footerStyle = {
//     color: 'green',
//     fontStyle: 'italic',
//     fontSize: 16
//   }
//   return (
//     <div style={footerStyle}>
//       <br />
//       <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
//     </div>
//   )
// }


// const App = () => {
//   const [notes, setNotes] = useState(null) 
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)
//   const [errorMessage, setErrorMessage] = useState(null)


//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value);
//   }

//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important === true)
 
//   useEffect(() => {
//     noteService
//       .getAll()
//       .then(initialNotes  => {
//         setNotes(initialNotes)
//       })
//   }, []);

//   if (!notes) { 
//     return null 
//   }

//   const toggleImportanceOf = id => {
//     const note = notes.find(n => n.id === id)
//     const changedNote = { ...note, important: !note.important }
  
//     noteService
//       .update(id, changedNote)
//       .then(returnedNote  => {
//         setNotes(notes.map(n => n.id !== id ? n : returnedNote))
//       })
//       .catch(error => {
//         setErrorMessage(
//           `Note '${note.content}' was already removed from server`
//         )
//         setTimeout(() => {
//           setErrorMessage(null)
//         }, 5000)
//         setNotes(notes.filter(n => n.id !== id))
//       })
//   }

//   const addNote = event => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() > 0.5,
//     }
  
//     noteService
//       .create(noteObject)
//       .then(returnedNote => {
//         setNotes(notes.concat(returnedNote));
//         setNewNote('');
//       })
//   }




//   return (
//     <div>
//       <h1>Notes</h1>
//       <Notification addition={null} err={errorMessage} />
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note =>
//           <Note 
//             key={note.id} 
//             note={note} 
//             toggleImportance={() => toggleImportanceOf(note.id)}
//           />
//         )}
//       </ul>
//       <form onSubmit={addNote}>
//         <input
//           value={newNote}
//           onChange={handleNoteChange}
//         />
//         <button type="submit">save</button>
//       </form>     
//       <Footer /> 
//     </div>
//   )
// }

// export default App


//************************************************************************************** */
//2.18-2.20

import { useState, useEffect } from 'react'
import axios from 'axios'

const View = ({country}) => {
      
      const [weather, setWeather] = useState(null);
      if (!country) {
        return
      }
  
      const name = country.name.official;
      const capital =  country.capital[0];
      const area =  country.area
      const languagesValues = Object.values(country.languages);
      const flag = Object.values(country.flags)[0]
      const latlng = country.latlng;
      const api_key = process.env.REACT_APP_API_KEY

      if (!weather) {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=${api_key}`)
            .then(response => {
                setWeather(response.data);
              })
      } else {
          const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
          return (
          <div>
            <h1>{name}</h1>
            <p>capitl {capital}</p>
            <p>area {area}</p>
            <h3>languages</h3>
            <ul>
              {languagesValues.map( language => <li key={language}>{language}</li>)}
            </ul>
            <img src={flag} alt={`Flag of ${name}`} /> 
            <h1>Weather in {name}</h1>
            <p>temperature {Number(weather.main.temp-273.15).toFixed(2)} Celcius</p>
            <img src={icon} alt="weather icon"/>
            <p>wind {weather.wind.speed} m/s</p>

          </div>
          );     
        }
}

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    // skip if currency is not defined
      axios
        .get(`https://restcountries.com/v3.1/all`)
        .then(response => {
              setCountries(response.data.filter(country => 
                JSON.stringify(country.name.official).includes(value)
              ));
        })
  }, [value]);

  

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = () => {
    if (countries === null) {
      return;
    }
    if (countries.length > 10) {
      return 'Too many matches, specify another filter'
    }
    if (countries.length === 1) {
      return <View country={countries[0]} />  
    }
    const names = countries.map( country => country.name.official);
    
    const handleShow = (name) => {
      if (countries) {
        setSelectedCountries(countries.filter( country => country.name.official === name))
      }
    }

    const getCountry = (selectedCountries, name) => {
      const country = selectedCountries.filter( country => country.name.official === name);
      if (country.length > 0) {
        return country[0];
      } 
      return null
    }

    return (
      <div>
        <ul>
          {names.map( name => 
          <li key={name}>
            {name}
            <button onClick={() => handleShow(name)}>show</button>
            <View country={getCountry(selectedCountries, name)}/>

          </li>)}
        </ul>
      </div>
    );  
  }

  return (
    <div>
      <form>
        find countries: <input value={value} onChange={handleChange} />
      </form>
      <pre>
        {onSearch()}
      </pre>
    </div>
  )
}

export default App