import React, { Component } from 'react';
import './Singlematch.css';
import Matchscore from './Matchscore';
import Matchfeed from './Matchfeed';

export class Singlematch extends Component 
{

	render() 
	{
				return (
					<div>
						<Matchscore matchid={this.props.match.params.id}/>
						<Matchfeed matchid={this.props.match.params.id}/>
					</div>
				);


	}
}

export default Singlematch;