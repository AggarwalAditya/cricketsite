import React, { Component } from 'react';

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
          this.setState({
            isLoaded: true,
            data: result.matches
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
			let myData=JSON.stringify(this.state.data);
			return(
					<div>{myData}</div>
				);
		}

		
	}
}

export default Livematches
