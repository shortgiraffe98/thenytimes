import React from 'react';
import { smallNewsContent } from '../../data';
import Opinions from './SmallNewsTypes/Opinions';
import SmallNewsLarge from './SmallNewsTypes/SmallNewsLarge';
import SmallNewsSmall from './SmallNewsTypes/SmallNewsSmall';

import './styles.css';

const SmallNews = () => {
	var index=-1;
	const smallLarge = [];
	const smallSmall = [];
	smallNewsContent.forEach((news) => {
		var currentPostId = Object.keys(news)[0];
		var currentNews = news[currentPostId];
		if (currentNews.postSize==='large') smallLarge.push(news);
		if (currentNews.postSize==='small') smallSmall.push(news);
	});
	console.log(smallLarge);
	console.log(smallSmall);
	return (
	<div className='smallnews__container'>
		{smallLarge.map((news) => {
			index++;
			var currentPostId = Object.keys(news)[0];
			var currentNews = news[currentPostId];
			return (
				<SmallNewsLarge key={currentPostId} currentNews={currentNews} index={index} />
			)
		})}
		<SmallNewsSmall listOfNews={smallSmall} index={index} />
		<Opinions />
	</div>
)
};

export default SmallNews;