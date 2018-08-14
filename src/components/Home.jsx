import React, { Component } from 'react';
import {NewsHeaderCard} from 'react-ui-cards';
import './Home.css';

export class Home extends Component 
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
		fetch("http://localhost:5000/news")
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

	parseNews = (data) =>{
		return(
				 <NewsHeaderCard
				 	  className='block'
			          href={data.href}
			          thumbnail='https://i.imgur.com/rLFk5nd.jpg'
			          title={data.title}
			          author='Daily Sport'
			          date='Feb 2, 2018'
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
			

			return(
					<div>
						<div className='card-container'>
							{
								
								this.state.data.map(this.parseNews)
							}
						</div>
					</div>
				);
		}
	}
}

export default Home;
