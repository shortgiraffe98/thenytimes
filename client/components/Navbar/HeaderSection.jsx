import React from 'react';
import { sections, otherBlogs } from '../../data';

const HeaderSection = () => {
	return (
		<div className='section__bar'>
			<div className='section__bar-items'>
				{sections.map((section,index) =>(<a key={`${section.section}-${index}`} href={`https://www.nytimes.com/section/${section.section}`}>{section.section}</a>))}
			</div>
			<div className='splitbar' />
			<div className='section__bar-otherblogs'>
				{otherBlogs.map((section) =>(<a key={section.name} href={section.url}>{section.name}</a>))}
			</div>
		</div>
	)
}

export default HeaderSection