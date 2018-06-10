import React from 'react'
import ReactDOM from 'react-dom'

class Inc extends React.Component {

	constructor(props)
	{
		super(props)
		this.state = {counter : 0}
		//bind this to increment function
		//this.increment = this.increment.bind(this)
	}

	increment =(e) =>
	{
		e.preventDefault();
		this.setState({
			counter : this.state.counter + 1
		});
	}

	render(){
		return <button onClick={/*(e)=> this.increment(e) */ this.increment}>The Value is {this.state.counter}</button>
	}

}
//render apps

ReactDOM.render(
	<Inc/>,
	document.getElementById('root')
)