import React, { Component } from 'react';
import {CryptoCard} from 'react-ui-cards';
import './Matchscore.css';

export class Matchscore extends Component 
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
		this.getMatchData();
	}

	componentDidUpdate = (prevProps) =>
	{
		console.log("componentDidUpdate");
		
		if (this.props.matchid !== prevProps.matchid) 
		{
		    this.getMatchData();
		}
	}

	getMatchData = () =>
	{
		
		fetch("http://cricapi.com/api/cricketScore?apikey=Shoc1nsinOU7YNbpSsGNie3xIlS2&unique_id="+`${this.props.matchid}`)
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

	parseMatchScore = (data) =>
	{
		 return(
		 	<CryptoCard
          currencyName={data["team-1"]}
          currencyPrice={data["team-2"]}
          icon=''
          currencyShortName={data.score}
          trend=''
          trendDirection={0}
          chartData={[9200, 5720, 8100, 6734, 7054, 7832, 6421, 7383, 8697, 8850]}
        />
        );
	}

	render() 
	{


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
			return (
			<div>
				<div className="card-container" style={{background: 'linear-gradient(to top, #141e30, #243b55)', padding: '4rem 1rem'}}>
					{this.parseMatchScore(this.state.data)}
				</div>
			</div>
			);	
		}

		
	}
}

export default Matchscore;