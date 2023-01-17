import React from "react";
import BigNews from "./BigNews";
import SmallNews from "./SmallNews";
import './styles.css';

const HottestNews = () => {
	return (
		<div className="hottestnews__container">
			<BigNews />
			<div className="hottestnews-splitbar" />
			<SmallNews />
		</div>
	)
}

export default HottestNews;