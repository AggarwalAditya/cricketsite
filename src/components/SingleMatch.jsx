import React, { Component } from 'react';

export class Singlematch extends Component 
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
		
	}

	getMatchData = () =>
	{
		fetch("http://cricapi.com/api/cricketScore?apikey=Shoc1nsinOU7YNbpSsGNie3xIlS2&unique_id="+`${this.props.match.params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
		
          this.setState({
            isLoaded: true,
            data: result
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

	render() 
	{
		return (
			<div>
				<div>Single match {this.props.match.params.id}</div>
				<div>{this.getMatchData()}</div>
				<p>{JSON.stringify(this.state.data)}</p>
			</div>
		);
	}
}

export default Singlematch;