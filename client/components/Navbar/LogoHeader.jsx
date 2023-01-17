import React from 'react';
import nytimesLogo from '../../images/thenewyorktimes.png';
import weatherIcon from '../../images/weather-2.png';
import { FaLongArrowAltDown } from 'react-icons/fa';

const LogoHeader = () => {
	return (
		<div className='header'>
			<div className='header__time'>
				<p><strong>Tuesday, January 3, 2023</strong></p>
				<p>Today's Paper</p>
			</div>
			<div className='header__logo'>
					<img
						src={nytimesLogo}
						alt="nytimes logo"
					/>
			</div>
			<div className='header__weather'>
				<div className='weather-info'>
					<img src={weatherIcon} alt="weather icon" />
					<p style={{ fontWeight: "bolder" }}>31°C</p>
					<p style={{ color: "#808080", fontSize: "11px" }}>32° 22°</p>
				</div>
				<div className='bitcoin-info'>
					<p>Nasdaq</p>
					<div>
						<p>-0.11%</p>
						<FaLongArrowAltDown style={{ fontSize: "12px"}} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogoHeader