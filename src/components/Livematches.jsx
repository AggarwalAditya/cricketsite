import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import {ProductCard} from 'react-ui-cards';
import './Livematches.css';
import Singlematch from './Singlematch';

export class Livematches extends Component 
{

	constructor(props)
	{
		super(props);
		this.state={
						error: false,
						isLoaded: false,
						data: {}
					};
	}

	componentDidMount = () =>
	{
		fetch("http://cricapi.com/api/matches?apikey=Shoc1nsinOU7YNbpSsGNie3xIlS2")
      .then(res => res.json())
      .then(
        (result) => {
		let myDataLength=Object.keys(result.matches).length;
		let startedMatches=[];
		for(let i=0;i<myDataLength;i++)
		{
			if(result.matches[i].matchStarted === true)
			{
				startedMatches.push(result.matches[i]);
			}
		}

          this.setState({
            isLoaded: true,
            data: startedMatches
          });
        },
        
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error: true
	          });
	        }
	      )
	}

	parseEatchMatch = (data) =>
	{
		return(
				<li key={data.unique_id}>
					<Link to={`${this.props.match.url}/${data.unique_id}`}>
						<ProductCard
				          photos={[
				            'https://i.imgur.com/jRVDeI8.jpg',
				          ]}
				          price={data.type}
				          productName={data["team-1"]}
				          description={data.toss_winner_team}
				          rating=''
				          url='https://github.com/nukeop'
				        />
			        </Link>
				</li>
				
			);
	}

	render() {

		if(this.state.error)
		{
			return(
					<div>Error</div>
				);
		}

		else if(!this.state.isLoaded)
		{
			return(
					<div>Is loading ...</div>
				);
		}

		else
		{
			

			return(
					<div>
						<ul>
							{
								this.state.data.map(this.parseEatchMatch)
							}
						</ul>
						<Switch>
						    <Route path={`${this.props.match.url}/:id(\\d+)`} component={Singlematch} />
						</Switch>
					</div>
				);
		}

		
	}
}

export default Livematches;
