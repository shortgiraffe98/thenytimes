import React, { useState, useEffect } from 'react';
import { timeSince } from '../../../tools/formatTools';
import './styles.css';
import { turnOnOffDisplay, getCurrentNewsState } from '../../../api';

const BigNewsLarge = ({ currentNews, index, toggleOnOff }) => {

	return (
		<div className={`${index>0 ? 'bignewslarge__container-splitbar' : 'bignewslarge__container'}`}>
			<div className="bignewslarge__container-posts">
				{currentNews["posts"].map((post, postIndex) => {
					const intervalString = timeSince(new Date(post.created_at));
					return (
					<div key={`newslarge-${postIndex}`}>
						{(postIndex > 0) && (<div className='bignewslarge__container-posts_splitbar' />)}
						<h1>{post.title}</h1>
						{post.content[0].p.map((p, pid) => (
							<p key={`newslarge-p-${pid}`} style={{ margin: "8px 0px 0px" }}>{p}</p>
						))}
						<p style={{ fontFamily: "Helvetica", fontSize: "10px", margin: "5px 0px 0px", color: "rgb(187, 187, 187)" }} >{post.minute_toread} MIN READ | {intervalString}</p>
					</div>
					)
				})}
			</div>
			{/* change this to a component, to hang on new display features */}
			<div className='bignewslarge__container-image'>
				<img src={currentNews["imageUrls"][0]} style={{ width: "500px", objectFit: "contain" }} onClick={toggleOnOff} />
				<p>{currentNews["columnist"]} / The New York Times</p>
			</div>
		</div>
	)
}

export default BigNewsLarge