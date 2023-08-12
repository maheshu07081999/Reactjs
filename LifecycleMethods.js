import React from 'react'

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    componentDidMount(){
        console.log("Hiiiiiii!",this.state.number);
    }

    componentDidUpdate(){
        console.log("In Component Did Update",this.state.number);
    }

    incresementNumber=()=>{
        this.setState({number:this.state.number+1})
    }

    render(){

        return(

            <div>
                <h1>Life Cycle Methods</h1>
                <p>Number is:{this.state.number}</p>
                <button type='button' onClick={this.incresementNumber}>Add</button>
            </div>
        )
    }

}     export default LifeCycleMethods
