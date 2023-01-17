import React from 'react';
import './styles.css';

const OpinionMedium = ({ currentNews }) => {
	return (
		<div className='opinionmedium__container'>
			<div className='opinionmedium__container-title'>
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
			<div className='opinionmedium__container-image'>
				<img src={currentNews.imageUrl} style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }} />
			</div>
		</div>
	)
}

export default OpinionMedium