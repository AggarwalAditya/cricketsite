import React, { Component } from 'react';

export class Matchfeed extends Component
 {
 	
 	constructor(props)
	{
		super(props);
		let  matchid=props.matchid;
		this.state={
						error: false,
						isLoaded: false,
						data: {},
						matchid:matchid
					};
	}

	componentDidMount = () =>{
		this.getMatchFeed();
	}

	componentDidUpdate = (prevProps) =>
	{
		console.log("componentDidUpdate");
		
		if (this.props.matchid !== prevProps.matchid) 
		{
		    this.getMatchFeed();
		}
	}

	getMatchFeed = () =>
	{
		fetch("http://localhost:5000/matchfeed")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
          	matchid: this.props.matchid,
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

	parseFeedItem = (data)=>
	{
		return
		(
			<li>
				<p>data</p>
			</li>
		);
	}
 	
	render() 
	{
		return (
			<div>
				
				This is the match feed {this.state.matchid}. 
				{JSON.stringify(this.state.data[this.state.matchid])}
			</div>
		);
	}
}

export default Matchfeed;