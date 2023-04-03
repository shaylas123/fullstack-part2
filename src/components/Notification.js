const Notification = ({ addition, err }) => {
    if (addition === null && err === null) {
      return null
    }

    const addStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const errStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
   
  
    return (
      <div style={addition ? addStyle : errStyle}>
        {addition ? addition : err}
      </div>
    )
  }

  export default Notification