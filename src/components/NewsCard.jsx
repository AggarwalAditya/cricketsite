import React, { Component } from 'react';
import {NewsHeaderCard} from 'react-ui-cards';

export class NewsCard extends Component 
{
	render() 
	{
		return (
			<NewsHeaderCard
          href='https://github.com/nekonee'
          thumbnail='https://i.imgur.com/rLFk5nd.jpg'
          title='Polish mountaineers on the top'
          author='Daily Sport'
          date='Feb 2, 2018'
        	/>
		);
	}
}


export default NewsCard;