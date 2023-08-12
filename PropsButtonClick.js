import React from 'react'
function Propsbuttonclick() {
    const [input, setInput] = React.useState('')
    const [displaydata, setDisplayData] = React.useState('')

    const handleInput = (event) => {
        setInput(event.target.value);
    }
    const ButtonClick = () => {
        setDisplayData(displaydata.input);
    }
    return (
        <div>
            <h1>Props Button Click</h1>
            <input type="text" onChange={handleInput} /><br /><br />
            <button onClick={ButtonClick}>Display</button>
            <Childfun massage={displaydata} />
        </div>
    )

}
function Childfun({ massage }) {
    return (
        <div>
            <h4>Hello i am Click</h4>
            <p>massage:{massage}</p>
        </div>
    )
} export default Propsbuttonclick