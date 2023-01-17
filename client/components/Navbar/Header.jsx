import React from 'react';
import { IoMdMenu, IoMdSearch } from 'react-icons/io';
import "./styles.css";

const Header = () => {
	return (
		<div className='header'>
			<div className='header__button-left'>
				<button className='header__button'>
					<IoMdMenu />
				</button>
				<button className='header__button search-button' style={{ marginLeft: "10px"}}>
					<IoMdSearch />
				</button>
			</div>
			<div className='header__list'>
					<a href="https://www.facebook.com/" style={{ fontWeight: "bolder" }}>U.S.</a>
					<a href="/">INTERNATIONAL</a>
					<a href="/">CANADA</a>
					<a href="/">ESPANOL</a>
					<a href="/">中文</a>
			</div>
			<div className='header__button-right'>
				<button >SUBSCRIBE FOR $0.25/WEEK</button>
				<button >LOG IN</button>
			</div>
		</div>
	)
}

export default Header