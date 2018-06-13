import React from 'react'
import ReactDOM from 'react-dom'

class Calculator extends React.Component {

	constructor(props)
	{
		super(props)
		this.state = {scale:'c',temp:0}
	}

	handleCgrade = (e) => {

		this.setState({
			scale:'c',temp:e.target.value
		})

	}

	handleFahrheit = (e) => {

		this.setState({
			scale:'f',temp:e.target.value
		})

	}

	render() 
	{
		const temp = this.state.temp
		const scale = this.state.scale

		const cgrade = scale === 'f' ? (temp - 32)*5/9: temp
		const fgrade = scale === 'c' ? (temp * 9/5) +32 :temp

		return (
			<div>
				<fieldset>
					<legend>C Grade</legend>
					<input type="text" value={cgrade} onChange={this.handleCgrade} />
				</fieldset>

				<fieldset>
					<legend>F Grade</legend>
					<input type="text" value={fgrade} onChange={this.handleFahrheit} />
				</fieldset>
			</div>
			);
	}
}

ReactDOM.render(

		<Calculator / >, 
		document.getElementById('root')
	);