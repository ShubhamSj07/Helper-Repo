import React, { useState } from 'react';
import { Button2 } from '../../components/util/Button/index';
import style from './ContactUs.module.scss';

export const ContactUs = () => {
	//setting form values
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [msg, setMsg] = useState('');

	//setting custom form error messages
	const [nameErr, setNameErr] = useState({});
	const [emailErr, setEmailErr] = useState({});
	const [subjectErr, setSubjectErr] = useState({});
	const [msgErr, setMsgErr] = useState({});

	const [submited, setSubmited] = useState(false);

	//setting form validations
	const validation = () => {
		let isValid = true;

		const nameErr = {};
		const emailErr = {};
		const subjectErr = {};
		const msgErr = {};

		//name
		if (!name) {
			nameErr.nameRequired = '* Name is required ';
			isValid = false;
		} else if (name.length < 3) {
			nameErr.nameRequired = '* Name must be atleast 3 characters';
			isValid = false;
		}

		if (name.match('^\\d+$')) {
			nameErr.nameRequired = '* Name must be in characters';
			isValid = false;
		}

		//email
		// eslint-disable-next-line
		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!emailRegex.test(email)) {
			emailErr.emailRequired = '* Please enter valid Email';
			isValid = false;
		}
		if (!email.trim()) {
			emailErr.emailRequired = '* Email is required';
			isValid = false;
		}
		//subject
		if (subject.trim().length < 5) {
			subjectErr.subjectRequired =
				'* Subject must be atleast 5 characters';
			isValid = false;
		}
		if (!subject.trim()) {
			subjectErr.subjectRequired = '* Subject is required';
			isValid = false;
		}
		//msg
		if (msg.trim().length < 8) {
			msgErr.msgRequired = '* Message must be atleast 8 characters';

			isValid = false;
		}
		if (!msg.trim()) {
			msgErr.msgRequired = '* Message is required';
			isValid = false;
		}

		//setting up errors in state
		setNameErr(nameErr);
		setEmailErr(emailErr);
		setSubjectErr(subjectErr);
		setMsgErr(msgErr);

		return isValid;
	};

	//setting onChange validations
	const handleNameChange = e => {
		const nameErr = {};

		let isValid = true;
		let name = e.target.value;
		setName(name);
		// console.log(name);

		//name
		if (!name) {
			nameErr.nameRequired = '* Name is required ';
			isValid = false;
		} else if (name.length < 3) {
			nameErr.nameRequired = '* Name must be atleast 3 characters';
			isValid = false;
		}

		if (name.match('^\\d+$')) {
			nameErr.nameRequired = '* Name must be in characters';
			isValid = false;
		}

		setNameErr(nameErr);
		return isValid;
	};

	const handleEmailChange = e => {
		const emailErr = {};

		let isValid = true;
		let email = e.target.value;
		setEmail(email);
		// console.log(email);

		//email
		// eslint-disable-next-line
		const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

	const handleSubjectChange = e => {
		const subjectErr = {};

		let isValid = true;
		let subject = e.target.value;
		setSubject(subject);
		// console.log(subject);

		//subject
		if (subject.trim().length < 5) {
			subjectErr.subjectRequired =
				'* Subject must be atleast 5 characters';
			isValid = false;
		}
		if (!subject.trim()) {
			subjectErr.subjectRequired = '* Subject is required';

			isValid = false;
		}

		setSubjectErr(subjectErr);
		return isValid;
	};

	const handleMsgChange = e => {
		const msgErr = {};

		let isValid = true;
		let msg = e.target.value;
		setMsg(msg);
		// console.log(subject);

		//message
		if (msg.trim().length < 8) {
			msgErr.msgRequired = '* Message must be atleast 8 characters';

			isValid = false;
		}
		if (!msg.trim()) {
			msgErr.msgRequired = '* Message is required';

			isValid = false;
		}

		setMsgErr(msgErr);
		return isValid;
	};

	//handling submit
	const handleSubmit = e => {
		e.preventDefault();

		//if isValid = true, form submission trigger
		const isValid = validation();

		if (isValid) {
			setSubmited(true);

			//resetting values in state after submission of form
			setName('');
			setEmail('');
			setSubject('');
			setMsg('');
		}
	};
	return (
		<div className={style['contact-section']}>
			<div className={style['contact-parent']}>
				<div className={`${style['contact-child']} ${style['child1']}`}>
					<img
						src='./images/contact-us-image.png'
						alt=''
						className={style['contact-image']}
					/>
				</div>
				<div className={`${style['contact-child']} ${style['child2']}`}>
					{submited ? (
						<React.Fragment>
							<div className={style['goodbye-card']}>
								<h1 className={style['card-heading']}>
									Hello There !
								</h1>
								<div className={style['inside-card']}>
									<p style={{ textAlign: 'center' }}>
										We have heard you! 😄 <br />
										We will get back to you very soon if
										required!
									</p>
								</div>
							</div>
						</React.Fragment>
					) : (
						<React.Fragment>
							<div className={style['contact-card']}>
								<h1 className={style['contact-header-text']}>
									Get In Touch
								</h1>
								<div className={style['inside-contact']}>
									<form onSubmit={handleSubmit}>
										<div className={style['contact-input']}>
											<input
												autoFocus='on'
												autoComplete='off'
												name='name'
												id='txt_name'
												type='text'
												placeholder='Your Name'
												value={name}
												onChange={handleNameChange}
											/>
											<i className='fas fa-user'></i>
											{Object.keys(nameErr).map(key => {
												return (
													<div
														className={
															style['validation']
														}
														key={key}
													>
														{nameErr[key]}
													</div>
												);
											})}
										</div>
										<div className={style['contact-input']}>
											<input
												autoComplete='off'
												id='txt_email'
												name='email'
												type='text'
												placeholder='Your Email'
												value={email}
												onChange={handleEmailChange}
											/>
											<i className='fas fa-envelope-open-text'></i>
											{Object.keys(emailErr).map(key => {
												return (
													<div
														className={
															style['validation']
														}
														key={key}
													>
														{emailErr[key]}
													</div>
												);
											})}
										</div>
										<div className={style['contact-input']}>
											<input
												autoComplete='off'
												id='txt_subject'
												name='subject'
												type='text'
												placeholder='Your Subject'
												value={subject}
												onChange={handleSubjectChange}
											/>
											<i className='fas fa-pencil-alt'></i>
											{Object.keys(subjectErr).map(
												key => {
													return (
														<div
															className={
																style[
																	'validation'
																]
															}
															key={key}
														>
															{subjectErr[key]}
														</div>
													);
												}
											)}
										</div>
										<div className={style['contact-input']}>
											<textarea
												autoComplete='off'
												name='message'
												id='txt_message'
												rows='4'
												cols='20'
												placeholder='Your Message'
												value={msg}
												onChange={handleMsgChange}
											></textarea>
											<i className='fas fa-comment-dots'></i>
											{Object.keys(msgErr).map(key => {
												return (
													<div
														className={
															style['validation']
														}
														key={key}
													>
														{msgErr[key]}
													</div>
												);
											})}
										</div>
										<div className={style['submit-btn']}>
											<Button2
												className={
													style['submit-btn-text']
												}
												label="Let's Talk!"
												type='submit'
											/>
										</div>
									</form>
								</div>
							</div>
						</React.Fragment>
					)}
				</div>
			</div>
		</div>
	);
};
