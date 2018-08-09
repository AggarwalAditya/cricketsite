import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';



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

	parseEatchMatch = (data,match) =>
	{
		return(
				<div>
					<ul>
						<li index={data.unique_id} key={data.unique_id}>
							<Link to={'${match.url}/${data.unique_id}'}>
								Match {data.unique_id}
							</Link>
						</li>
						{/*<Route path={`${match.url}/:id(\\d+)`} component={SingleMatch} />*/}
					</ul>
					{/*<Route path={'${match.url}/:id(\\d+)'} component={Match} />*/}
				</div>
				
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
						{
							this.state.data.map(this.parseEatchMatch)
						}
					</div>
				);
		}

		
	}
}

export default Livematches;
