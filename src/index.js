import React from 'react'
import ReactDOM from 'react-dom'

//create clock in React

function Clock()
{
	return <h1>The local time is: {new Date().toLocaleTimeString()}</h1>

}

function time()
{
	ReactDOM.render(
     <Clock />,

		document.getElementById('root')
	);
}

setInterval(function(){time()},1000);
