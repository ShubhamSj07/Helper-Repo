import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.scss';

export const Footer = () => {
	//email state
	const [email, setEmail] = useState('');
	//setting email error
	const [emailErr, setEmailErr] = useState({});

	const emailValidation = email => {
		let isValid = true;
		const emailErr = {};
		// eslint-disable-next-line
		const emailRegex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

		if (!emailRegex.test(email)) {
			emailErr.emailRequired = '* Please enter valid Email';
			isValid = false;
		}
		if (!email.trim()) {
			emailErr.emailRequired = '* Email is required';
			isValid = false;
		}
		setEmailErr(emailErr);
		return isValid;
	};

	const validation = () => {
		let isValid = true;
		//email
		isValid = emailValidation(email);
		return isValid;
	};

	//setting up validations onChange
	const handleEmailChange = e => {
		let isValid = true;
		let email = e.target.value;
		setEmail(email);
		isValid = emailValidation(email);
		return isValid;
	};

	//handling submit
	const handleSubmit = e => {
		e.preventDefault();

		//if isValid = true, form submission trigger
		const isValid = validation();

		if (isValid) {
			console.log('Succesfully subcribed for our newsletter!');

			//resetting email value in state after submission of form
			setEmail('');
		}
	};

	return (
		<React.Fragment>
			<footer className={style['footer']}>
				<div className={style['footer-addr']}>
					<h1 className={style['footer-logo']}>
						HITK Tech Community
					</h1>
					<address>
						<i className='fas fa-map-marker-alt'></i> Heritage
						Institute of Technology, Chowbaga Road, Kolkata, West
						Bengal - 700107, India
						<br />
					</address>
					<div className={style['newsletter']}>
						<h2 className={style['nav-title']}>
							Sign Up for our Newsletter
						</h2>
						<p>
							Receive updates and news about various Job
							Opportunities, Internships, Webinars and Open Source
							Events.
						</p>

						<form
							className='d-flex flex-column flex-md-row align-items-center mt-4'
							onSubmit={handleSubmit}
						>
							<input
								type='text'
								name='email'
								className={`${style['input-field-footer']} py-2`}
								placeholder='Email Id'
								onChange={handleEmailChange}
								value={email}
							/>
							<br />
							{Object.keys(emailErr).map(key => {
								return (
									<div
										className={`${style['validation']} d-sm-block d-md-none`}
										key={key}
									>
										{emailErr[key]}
									</div>
								);
							})}
							<button
								type='submit'
								className={`mt-3 mt-md-0 ${style['submit-btn-footer']} py-2 px-3 `}
							>
								Sign Up
							</button>
						</form>
						{Object.keys(emailErr).map(key => {
							return (
								<div
									className={`${style['validation-new']} validation-new d-sm-none d-md-block`}
									key={key}
								>
									{emailErr[key]}
								</div>
							);
						})}
					</div>
				</div>
				<ul className={style['footer-nav']}>
					<li className={style['nav-item']}>
						<h2 className={style['nav-title']}>Navigation</h2>

						<ul className={style['nav-ul']}>
							<li>
								<Link to='/about-us'>About</Link>
							</li>

							<li>
								<Link to='/broadcasts'>Broadcasts</Link>
							</li>

							<li>
								<Link to='/resources'>Resources</Link>
							</li>

							<li>
								<Link to='/contact-us'>Contact</Link>
							</li>

							<li>
								<Link to='/faqs'>FAQs</Link>
							</li>
						</ul>
					</li>

					<li className={style['nav-item']}>
						<h2 className={style['nav-title']}>Other</h2>

						<ul className={style['nav-ul']}>
							<li>
								<Link to='/privacy-policy'>Privacy Policy</Link>
							</li>

							<li>
								<Link to='/terms'>Terms of Use</Link>
							</li>

							<li>
								<Link to='/get-involved'>Get Involved</Link>
							</li>
						</ul>
					</li>
					<li>
						<h2 className={style['nav-title']}>Social</h2>
						<ul className={style['nav-ul']}>
							<li>
								Be sure to give us a follow on the below social
								links
							</li>
						</ul>
						<div className={`col ${style['col']}`}>
							<ul className={style['social']}>
								<li>
									<a
										href='https://www.linkedin.com/company/hitk-tech-community'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className={style['outer']}>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<div className={style['inner']}>
												<i
													className={`fab fa-linkedin fa-lg ${style['fa-linkedin-own']}`}
												></i>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a
										href='https://join.slack.com/t/hitkteckcommunity/shared_invite/zt-jgr1sd87-lhiXHO_x63Kt7h8VBxDaFw'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className={style['outer']}>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<div className={style['inner']}>
												<i
													className={`fab fa-slack fa-lg ${style['fa-slack-own']}`}
												></i>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a
										href='mailto:hitktechcommunity@gmail.com'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className={style['outer']}>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<div className={style['inner']}>
												<i
													className={`fas fa-envelope fa-lg ${style['fa-envelope-own']}`}
												></i>
											</div>
										</div>
									</a>
								</li>
								<li>
									<a
										href='https://github.com/HITK-TECH-Community/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className={style['outer']}>
											<span></span>
											<span></span>
											<span></span>
											<span></span>
											<div className={style['inner']}>
												<i
													className={`fab fa-github fa-lg ${style['fa-github-own']}`}
												></i>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className={style['footer-dash']}>
					<div className={style['footer-text']}>
						<p>
							Made with{' '}
							<i
								className='fas fa-heart'
								style={{ color: '#DB3328' }}
							></i>{' '}
							by HITK Tech Community
						</p>
					</div>
				</div>
			</footer>

			<div className={style['cprt-text']}>
				<p className={`${style['cprt']} py-2`}>
					Copyright © 2020 HITK Tech Community
				</p>
			</div>
		</React.Fragment>
	);
};
