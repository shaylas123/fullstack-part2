const Form = ({newName, HandleNameChange, newPhoneNumber, HandlePhoneNumberChange, HandlePersonSubmition}) => {
  
    return (
      <form>
      <div>
        name: <input value={newName} onChange={HandleNameChange}/>
      </div>
      <div>
        number: <input value={newPhoneNumber} onChange={HandlePhoneNumberChange}/>
      </div>
      <div>
        <button type="submit" onClick={HandlePersonSubmition}>add</button>
      </div>
    </form>
    )
  }

  export default Form