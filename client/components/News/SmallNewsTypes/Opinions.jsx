import React from 'react';
import { opinionContent } from '../../../data';
import OpinionSmall from './Opinions/OpinionSmall';
import OpinionMedium from './Opinions/OpinionMedium';

const Opinions = () => {
	return (
		<div className='opinion__container'>
			{opinionContent.map((news, index) => {
				var currentNewsId = Object.keys(news)[0];
				var currentNews = news[currentNewsId];
				var postSize = currentNews.postSize;
				switch (postSize) {
					case 'medium':
						return <OpinionMedium key={`opinion-${index}`} currentNews={currentNews} />
					case 'small':
						return <OpinionSmall key={`opinion-${index}`} currentNews={currentNews} />
				}
			})}			
		</div>
	)
};

export default Opinions;