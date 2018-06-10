import React from 'react'
import ReactDOM from 'react-dom'

//create clock in React

// function Clock()
// {
// 	return <h1>The local time is: {new Date().toLocaleTimeString()}</h1>

// }

class Clock extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			date: new Date()
		}

	}

	//this function runs when the the page is loadid

	componentDidMount()
	{
		this.timer = setInterval(() => this.start(),1000)

	}

    //this function run when the the page is to close
	componentWillUnmount()
	{
		clearInterval(this.timer);
	}

	start()
	{
		this.setState({
			date: new Date()
		});
	}

	render(){
		return <h1>The local time is: {this.state.date.toLocaleTimeString()}</h1>
	}
}

/// render the Dom
	ReactDOM.render(
     <Clock />,

		document.getElementById('root')
	);


