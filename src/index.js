import React from 'react'
import ReactDOM from 'react-dom'

//create clock in React

setInterval(function(){

	function Clock()
	{
		return <h1>The local time is: {new Date().toLocaleTimeString()}</h1>

	}
	ReactDOM.render(
     <Clock />,

		document.getElementById('root')
	);
},1000);
