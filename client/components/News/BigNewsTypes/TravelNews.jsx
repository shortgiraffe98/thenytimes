import React from 'react';
import video from '../../../videos/travel.mp4';

const TravelNews = ({ currentNews, index }) => {
	return (
		<div className={`${index>0 ? 'travelnews__container-splitbar' : 'travelnews__container'}`}>
			<video width="700" autoPlay loop muted>
				<source src={currentNews.videoUrls[0]} type="video/mp4" />
			Your browser does not support the video tag.
			</video>
			<div className='travelnews__container-discription'>
				<h1>{currentNews.short_discription}</h1>
				<p>{currentNews.long_discription}</p>
			</div>
		</div>
	)
};

export default TravelNews