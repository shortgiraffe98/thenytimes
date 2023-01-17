import React from 'react';
import { useState } from 'react';
import { timeSince } from '../../../tools/formatTools';
import "./styles.css";
import { turnOnOffDisplay, getCurrentNewsState } from '../../../api';
import { useEffect } from 'react';

const SmallNewsLarge = ({ currentNews, index }) => {
	const intervalString = timeSince(new Date(currentNews.posts[0].created_at));
	const [isDisplayed, setIsDisplayed] = useState(null);
	console.log("outer",isDisplayed);

	const getCurrentNews = async () => {
		const currentPost = await getCurrentNewsState();
		const displayState = await currentPost.data.isDisplayed;
		console.log("getCurrentNews",displayState);
		setIsDisplayed(displayState);
	}
	
	const toggleOnOff = async () => {
		console.log("toggleOnOff",isDisplayed);
		console.log(isDisplayed===true?1:0);
		await turnOnOffDisplay(!isDisplayed===true?1:0);
		getCurrentNews();
	}

	useEffect(() => {
		getCurrentNews();
	},[]);
	return (
		<div className={`${index>0 ? 'smallnewslarge__container-splitbar' : 'smallnewslarge__container'}`}>
			<img src={currentNews.imageUrl} style={{ objectFit: "contain", width: "330px" }} onClick={toggleOnOff} />
			<p
				style={{ 
					fontSize: "13px",
					textAlign: "right",
					margin: "5px 0px 0px",
					color: "grey"
				 }}
			>{currentNews.columnist} / The New York Times</p>
			<h1
				style={{ 
					fontSize: "25px",
					margin: "7px 0px 0px",
					fontWeight: 500
				 }}
			>{currentNews.posts[0].title}</h1>
			<p
				style={{ 
					fontSize: "16px",
					margin: "5px 0px 0px",
					fontWeight: "lighter",
					color: "grey"
				}}
			>{currentNews.posts[0].content.p[0]}</p>
			<p
				style={{ 
					fontFamily: "Helvetica", fontSize: "10px", margin: "5px 0px 0px", color: "rgb(187, 187, 187)"
				}}
			>{currentNews.posts[0].minute_toread} MIN READ | {intervalString}</p>
		</div>
	)
}

export default SmallNewsLarge;