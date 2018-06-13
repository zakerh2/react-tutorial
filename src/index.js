import React from 'react'
import ReactDOM from 'react-dom'


function Message(props)
{
	if(props.value)
	{
		return <h2>I am the first Message</h2>

	}
	
	return <h2>I am the 2nd Message</h2>

}
class Btn extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			value: true,
		}
	}

	handleMessag =() => {

		this.setState({
			value: !this.state.value
		})
	}


	render()
	{
		return (
				<div>
					<button onClick={this.handleMessag} > Change The Message </button>
					<Message value={this.state.value} />
				</div>
			)
	}
}

ReactDOM.render(

	<Btn/>,

	document.getElementById('root')
)