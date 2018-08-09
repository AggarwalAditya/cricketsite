import React, { Component } from 'react';
import {Grid,Jumbotron} from 'react-bootstrap';

export class Banner extends Component
{
	render() {
		return (
			<Grid>
				<Jumbotron>
					<h2>Welcome to my world.</h2>
					<p>This is how to build a website using react, react-router and react-bootstrap.</p>
				</Jumbotron>
			</Grid>
		);
	}
}

export default Banner;
