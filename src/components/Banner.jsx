import React, { Component } from 'react';
import {Grid,Jumbotron} from 'react-bootstrap';

export class Banner extends Component
{
	render() {
		return (
			<Grid>
				<Jumbotron>
					<h2>Welcome to Crick-O-pedia</h2>
					<p>This website aims at providing you the latest cricket buzz.</p>
				</Jumbotron>
			</Grid>
		);
	}
}

export default Banner;
