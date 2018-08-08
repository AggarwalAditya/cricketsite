import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class CustomNavbar extends Component 
{
	render() 
	{
		return (
			<div>
				<ul>
					<li> <Link to="/">Home</Link> </li>
  					<li> <Link to="/livematches">Live Matches</Link> </li>
				</ul>
			</div>
		);
	}
}

export default CustomNavbar;