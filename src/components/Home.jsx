import React, { Component } from 'react';

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
						{
							JSON.stringify(this.state.data)
						}
					</div>
				);
		}
	}
}

export default Home;
