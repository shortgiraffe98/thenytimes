import React, { useRef, useState } from 'react';
import { timeSince } from '../../../tools/formatTools';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import "./styles.css";

const SmallNewsSmall = ({ listOfNews, index }) => {
	// const intervalString = timeSince(new Date(listOfNews.posts[0].created_at));
	const [imageIndex, setImageIndex] = useState(0);
	const numsOfImages = Math.ceil(listOfNews.length / 2);
	const isOdd = listOfNews.length % 2 === 1;
	const postSlide = useRef(); 
	var verticalIndex = 0;

	return (
		<div className={`${index>=0 ? 'smallnewssmall__container-splitbar' : 'smallnewssmall__container'}`} >
			<div className='smallnewssmall__container-content' ref={postSlide} style={{ width: "330px" }}>
			{listOfNews.map((news, newsIndex) => {
				verticalIndex++; 
				var currentId = Object.keys(news)[0];
				var currentNews = news[currentId];
				return (
					<div key={`smallsmall -${newsIndex}`} className={`${verticalIndex%2===0 ? 'smallnewssmall__container-items_splitbar' : 'smallnewssmall__container-items'}`}>
						<img src={currentNews.imageUrl} style={{ width: "147.5px", objectFit: "cover" }} />
						<h5
							style={{ 
								margin: "5px 0px 0px"
							}}
						>{currentNews.posts[0].title}</h5>
					</div>				
				)
			})}
				{isOdd && (<div style={{ flex: "0 0 auto", width: "182.5px" }} />)}
			</div>
			<div style={{ alignSelf: "flex-end"}}>
				<SlArrowLeft className='scroll-icon' style={imageIndex===0 ? { color: "lightgray", pointerEvents: "none" } : {color: "black"}} onClick={() => {
					setImageIndex(prev=>(prev===0 ? 0 : prev-1));
					postSlide.current.scrollLeft = 330*(imageIndex-1);
					console.log(500*(imageIndex-1));
				}} />
				<SlArrowRight className='scroll-icon' style={imageIndex===numsOfImages-1 ? { color: "lightgray", pointerEvents: "none" } : {color: "black"}} onClick={() => {
					setImageIndex(prev=>((prev<numsOfImages-1) ? prev+1 : numsOfImages-1));
					postSlide.current.scrollLeft = 330*(imageIndex+1);
					console.log(500*(imageIndex+1));
				}} />
			</div>
		</div>
	)
}

export default SmallNewsSmall;