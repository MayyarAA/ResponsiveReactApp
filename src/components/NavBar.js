import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	//if screen of device is too large, do not showButton
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);
	// this fcn will listen to the window resizing event
	//when the window resizes it calls showButton
	//showButton will then check the size of the display
	//if the display is too small it will set setButton(false) which makes the button disaper
	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						TRVL
						<i class='fab fa-typo3' />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/services'
								className='nav-links'
								onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/products'
								className='nav-links'
								onClick={closeMobileMenu}>
								Products
							</Link>
						</li>

						<li>
							<Link
								to='/signup'
								className='nav-links-mobile'
								onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
					{/*if button is true return the children of Button /*/}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
