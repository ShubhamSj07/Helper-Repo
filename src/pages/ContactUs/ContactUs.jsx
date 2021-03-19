import React, { useState } from 'react';
import { Button2 } from '../../components/util/Button/index';
import style from './ContactUs.module.scss';
import Joi from 'joi-browser';

export const ContactUs = () => {
	const [formdata, setFormData] = useState({
		name: '',
		subject: '',
		message: '',
	});

	const [formerrors, setFormErrors] = useState({});
	const [submited, setSubmited] = useState(false);
	//email
	const [email, setEmail] = useState('');
	const [emailErr, setEmailErr] = useState({});
	//email-validations
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
			emailErr.emailRequired = '* email is required';
			isValid = false;
		}
		setEmailErr(emailErr);
		return isValid;
	};
	const validation = () => {
		let isValid = true;
		let isEmailValid = true;
		isEmailValid = emailValidation(email);
		//for checking if email have been validated or not
		if (isEmailValid) return isValid;
	};
	const handleEmailChange = name => e => {
		let isValid = true;
		switch (name) {
			case 'email':
				let email = e.target.value;
				setEmail(email);
				isValid = emailValidation(email);
				return isValid;
			default:
				return isValid;
		}
	};
	const schema = {
		name: Joi.string().trim().required().min(3).label('Name'),
		subject: Joi.string().trim().required().min(5).label('Subject'),
		message: Joi.string().trim().required().min(8).label('Message'),
	};
	const validate = () => {
		const result = Joi.validate(formdata, schema, { abortEarly: false });
		if (!result.error) return null;
		const errors = {};
		for (let item of result.error.details) {
			errors[item.path[0]] = item.message;
		}
		return errors;
	};
	const validateProperty = input => {
		const { name, value } = input;
		const obj = { [name]: value };
		const obj_schema = { [name]: schema[name] };
		const result = Joi.validate(obj, obj_schema);
		return result.error ? result.error.details[0].message : null;
	};
	const handleSubmit = e => {
		e.preventDefault();
		const errors = validate();
		Object.keys(formdata).map(key => {
			if (formdata[key] === '' || formdata[key] === null) {
				errors[key] = `${key} is required`;
			}
		});
		const isValid = validation();
		if (errors !== 0) {
			setFormErrors(errors);
		}
		if (errors && isValid !== false) {
			setSubmited(false);
		} else if (isValid) {
			setSubmited(true);
			setFormData('');
		}
	};
	const handleChange = e => {
		const { currentTarget: input } = e;
		const errors = { ...formerrors };
		const errorMessage = validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...formdata };
		data[input.name] = input.value;
		setFormData({ ...data, [input.name]: input.value });
		setFormErrors(errors);
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
												onChange={handleChange}
											/>
											<i className='fas fa-user'></i>
											{formerrors['name'] && (
												<div
													className={
														style['validation']
													}
												>
													* {formerrors['name']}
												</div>
											)}
										</div>
										<div className={style['contact-input']}>
											<input
												autoComplete='off'
												id='txt_email'
												type='text'
												placeholder='Your Email'
												value={email}
												onChange={handleEmailChange(
													'email'
												)}
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
												name='subject'
												id='txt_subject'
												type='text'
												placeholder='Your Subject'
												onChange={handleChange}
											/>
											<i className='fas fa-pencil-alt'></i>
											{formerrors['subject'] && (
												<div
													className={
														style['validation']
													}
												>
													* {formerrors['subject']}
												</div>
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
												onChange={handleChange}
											></textarea>
											<i className='fas fa-comment-dots'></i>
											{formerrors['message'] && (
												<div
													className={
														style['validation']
													}
												>
													* {formerrors['message']}
												</div>
											)}
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
