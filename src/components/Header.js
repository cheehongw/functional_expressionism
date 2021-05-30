import React from 'react';

/**
 * Header bar component for webapp.
 */
export const Header = (props) => {
	return (
		<nav className='navbar navbar-default'>
			<div className="container"><div className="navbar-header">
				<ul className="nav navbar-nav">
					<li>
						<a href="#"> {props.children} </a>
					</li>
				</ul>
			</div>
			</div>
		</nav>
	);
};