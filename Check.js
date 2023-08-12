import React from 'react'

function Check(){

    const[message,setMessage]=React.useState('')

    const handleInput=(event)=>{
        setMessage(event.target.value) 
        console.log(message);
    }

    return(
        <div>
            <h1>Checking for Hushar Candidate</h1>
            <input type="text" name="firstName" onChange={handleInput}/>
            <p>Message : {message}</p>
        </div>
    )

}

export default Check