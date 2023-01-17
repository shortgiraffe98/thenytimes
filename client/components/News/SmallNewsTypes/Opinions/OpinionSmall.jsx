import React from 'react';

const OpinionSmall = ({ currentNews }) => {
	const hasImage = currentNews.writerImageUrl !== '';
	console.log(currentNews.posts[0].title, hasImage);
	return (
		<div
			className='opinionsmall__container'
			style={hasImage ? 
			{
				gridTemplateAreas: `"left4 right1"`,
			} 
			: {
				gridTemplateAreas: `"left4 left4"`,
			}}
		>
			<div className='opinionsmall__container-title'>
				<p
					style={{
						margin: "0px",
						fontSize: "13px",
						color: "grey"
					}}
				>{currentNews.columnist}</p>
				<h3
					style={{
						margin: "3px 0px",
					}}
				>{currentNews.posts[0].title}</h3>
				<p
					style={{
						fontFamily: "Helvetica",
						fontSize: "10px",
						margin: "5px 0px 0px",
						color: "rgb(187, 187, 187)"
					}}
				>{currentNews.posts[0].minute_toread} MIN READ</p>
			</div>
			{hasImage && (
			<div className='opinionsmall__container-image'>
				<img src={currentNews.writerImageUrl} style={{ objectFit: "contain", maxWidth: "100%" }} />
			</div>
			)}
		</div>
	)
};

export default OpinionSmall;