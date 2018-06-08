import React from 'react'
import ReactDOM from 'react-dom'

//create clock in React

setInterval(function(){
	ReactDOM.render(

		 <h1>The local time is: {new Date().toLocaleTimeString()}</h1>,

		document.getElementById('root')
	);
},1000);
