import React from 'react';
import { useRef, useState } from 'react';
import { timeSince } from '../../../tools/formatTools';
import './styles.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const BigNewsLargeSlide = ({ currentNews, index }) => {
	// console.log(timeSince(new Date(currentNews.created_at)));
	const imageSlide = useRef();
	const [imageIndex, setImageIndex] = useState(0);
	const numsOfImages = currentNews["imageUrls"].length;
	let currentScroll = 0;
	return (
		<div className={`${index>0 ? 'bignewslarge__container-splitbar' : 'bignewslarge__container'}`}>
			<div className="bignewslarge__container-posts">
				{currentNews["posts"].map((post, postIndex) => {
					const intervalString = timeSince(new Date(post.created_at));
					return (
					<div key={`newslarge-slide-${postIndex}`}>
						{(postIndex > 0) && (<div className='bignewslarge__container-posts_splitbar' />)}
						<h1>{post.title}</h1>
						{post.content[0].p.map((p, pid) => (
							<p key={`newslarge-slide-p-${pid}`} style={{ margin: "8px 0px 0px" }}>{p}</p>
						))}
						<p style={{ fontFamily: "Helvetica", fontSize: "10px", margin: "5px 0px 0px", color: "rgb(187, 187, 187)" }} >{post.minute_to_read} MIN READ | {intervalString}</p>
					</div>
					)
				})}
			</div>
			{/* change this to a component, to hang on new display features */}
				<div className='bignewslarge__container-image'>
					<div ref={imageSlide}className="bignewslarge__container-image_container" >
						{currentNews["imageUrls"].map((url, imgid) => (
								<img key={`newslarge-slide-img-${imgid}`} src={url} style={{ width: "500px", objectFit: "contain" }} />
						))}
					</div>
					<p>{currentNews["columnist"]} / The New York Times</p>
					<div className='image__navigate-bar'>
						<div className='image__navigate-bar_empty' />
						<div className='image__navigate-bar_dots'>
							{currentNews["imageUrls"].map((url, imgid) => (
									<div key={`dots-${imgid}`} className={(imgid===imageIndex) ? "active" : ""} />
							))}
						</div>
						<div className='image__navigate-bar_scrollicon'>
							<SlArrowLeft className='scroll-icon' style={imageIndex===0 ? { color: "lightgray", pointerEvents: "none" } : {color: "black"}} onClick={() => {
								setImageIndex(prev=>(prev===0 ? 0 : prev-1));
								imageSlide.current.scrollLeft = 500*(imageIndex-1);
								console.log(500*(imageIndex-1));
							}} />
							<SlArrowRight className='scroll-icon' style={imageIndex===numsOfImages-1 ? { color: "lightgray", pointerEvents: "none" } : {color: "black"}} onClick={() => {
								setImageIndex(prev=>((prev<numsOfImages-1) ? prev+1 : numsOfImages-1));
								imageSlide.current.scrollLeft = 500*(imageIndex+1);
								console.log(500*(imageIndex+1));
							}} />
						</div>
					</div>
				</div>
		</div>
	)
}

export default BigNewsLargeSlide;