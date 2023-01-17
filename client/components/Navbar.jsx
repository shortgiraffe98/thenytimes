import React from 'react';
import Header from './Navbar/Header';
import HeaderSection from './Navbar/HeaderSection';
import LogoHeader from './Navbar/LogoHeader';

const Navbar = () => {
	return (
		<div className='navbar__container'>
			<Header />
      <LogoHeader />
      <HeaderSection />
		</div>
	)
}

export default Navbar;
