import React, { useState, useEffect } from 'react';
import './styles.css';
import BigNewsLarge from './BigNewsTypes/BigNewsLarge';
import BigNewsLargeSlide from './BigNewsTypes/BigNewsLargeSlide';
import BigNewsMedium from './BigNewsTypes/BigNewsMedium';
import BigNewsSmall from './BigNewsTypes/BigNewsSmall';
// import { newsContent } from '../../data';
import TravelNews from './BigNewsTypes/TravelNews';
import { getAllNews, turnOnOffDisplay } from '../../api';

const BigNews = () => {
	// console.log(newsContent);
	const [newsContent, setNewsContent] = useState([]);
	var index = -1;
	const getCurrentNews = async () => {
		const currentPost = await getAllNews();
		console.log("getCurrentNews",currentPost.data);
		setNewsContent(currentPost.data);
	}
	
	const toggleOnOff = async () => {
		await turnOnOffDisplay(0);
		await getCurrentNews();
	}

	useEffect(() => {
		getCurrentNews();
	},[]);
	// const toggleOnOff = async () => {
	// 	console.log("toggleOnOff",isDisplayed);
	// 	console.log(isDisplayed===true?1:0);
	// 	await turnOnOffDisplay(!isDisplayed===true?1:0);
	// 	getCurrentNews();
	// }
	return (
		<div className='bignews__container'>
			{newsContent.map((news) => {
				// var currentPostId = Object.keys(news)[0];
				// var currentNews = news[currentPostId];
				var currentNews = news;
				var postSize = news["postSize"];
				var isDisplayed = currentNews["isDisplayed"];
				if (isDisplayed===true){
					index++;
					switch(postSize){
						case "large":
							return (<BigNewsLarge toggleOnOff={toggleOnOff} key={news["newsId"]} currentNews={currentNews} index={index} />);
						case "medium":
							return (<BigNewsMedium toggleOnOff={toggleOnOff} key={news["newsId"]} currentNews={currentNews} index={index} />);	
						case 'travelvideo':
							return (<TravelNews toggleOnOff={toggleOnOff} key={news["newsId"]} currentNews={currentNews} index={index} />);
						case 'large with slide':
							return (<BigNewsLargeSlide toggleOnOff={toggleOnOff} key={news["newsId"]} currentNews={currentNews} index={index} />);
						default:
							return (<div>Empty</div>);
					}
				}
			})}
			{/* <BigNewsSmall /> */}
		</div>
	)
}

export default BigNews;