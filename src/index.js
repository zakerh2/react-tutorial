import React from 'react'
import ReactDOM from 'react-dom'



function ListItem(props)
{
	const clist = props.cartoon
	return <ul>
	{
		clist.map((clist, index) => <li key={index}>{clist}</li>)
	}
	</ul>
}

const list = ['ahmad','zaker','ali','ali'];
ReactDOM.render(

		<ListItem cartoon={list}/>,

		document.getElementById('root')
	);