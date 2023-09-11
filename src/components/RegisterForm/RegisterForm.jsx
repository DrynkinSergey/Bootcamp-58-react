import React, { Component } from 'react'
import { StyledFlex } from '../../styledComponents/StyledFlex'
import styled from 'styled-components'
import StyledLabel from '../../styledComponents/StyledLabel'
import StyledButton from '../../styledComponents/StyledButton'

const INITIAL_STATE = {
	name: '',
	surname: '',
	email: '',
	age: '',
	country: 'ukraine',
	gender: 'male',
	text: '',
	agree: false,
}

class RegisterForm extends Component {
	state = { ...INITIAL_STATE }

	handleSubmit = e => {
		e.preventDefault()
		this.props.login(this.state)
		this.setState(INITIAL_STATE)
	}
	// handleChangeName = e => {
	// 	this.setState({ name: e.target.value })
	// }
	handleChange = ({ target }) => {
		const { name, value } = target
		//1 IF - ELSE
		// if (name === 'name') {
		// 	this.setState({ name: value })
		// }
		// if (name === 'surname') {
		// 	this.setState({ name: value })
		// }

		//2. SWITCH
		// switch (name) {
		// 	case 'name':
		// 		this.setState({ name: value })
		// 		break
		// 	case 'surname':
		// 		this.setState({ surname: value })
		// 		break
		// 	default:
		// 		break
		// }
		if (name === 'agree') {
			this.setState({ agree: !this.state.agree })
			return
		}
		this.setState({ [name]: value })
	}

	render() {
		const { name, age, surname, email, country, gender, text, agree } = this.state
		return (
			<StyledForm onSubmit={this.handleSubmit}>
				<StyledFlex $gap='20px' $direction='column'>
					<h1>Hard Register Form</h1>
					<StyledLabel>
						First Name
						<input value={name} onChange={this.handleChange} name='name' placeholder='Enter name...' />
					</StyledLabel>
					<StyledLabel>
						Last Name
						<input value={surname} onChange={this.handleChange} name='surname' placeholder='Enter surname...' />
					</StyledLabel>
					<StyledLabel>
						Email
						<input value={email} onChange={this.handleChange} name='email' placeholder='Enter email...' />
					</StyledLabel>
					<StyledLabel>
						Age
						<input value={age} onChange={this.handleChange} name='age' type='number' placeholder='Enter age...' />
					</StyledLabel>

					<StyledLabel>
						Choose your country
						<select onChange={this.handleChange} value={country} name='country'>
							<option value='ukraine'>Ukraine</option>
							<option value='usa'>USA</option>
							<option value='spain'>Spain</option>
						</select>
					</StyledLabel>
					<StyledFlex>
						<StyledLabel $display='flex'>
							<input checked={gender === 'male'} onChange={this.handleChange} type='radio' value='male' name='gender' />
							Male
						</StyledLabel>
						<StyledLabel $display='flex'>
							<input
								checked={gender === 'female'}
								onChange={this.handleChange}
								type='radio'
								value='female'
								name='gender'
							/>
							Female
						</StyledLabel>
					</StyledFlex>
					<StyledLabel>
						Send us your letter
						<textarea onChange={this.handleChange} value={text} name='text' placeholder='Are you so cool today!!' />
					</StyledLabel>
					<StyledLabel $display='flex'>
						<input onChange={this.handleChange} checked={agree} name='agree' type='checkbox' />
						I'm confirm this rules!
					</StyledLabel>
					<StyledButton disabled={!agree}>Submit</StyledButton>
				</StyledFlex>
			</StyledForm>
		)
	}
}

// const RegisterForm = () => {
// 	return (
// 		<StyledForm>
// 			<StyledFlex $gap='20px' $direction='column'>
// 				<h1>Hard Register Form</h1>
// 				<StyledLabel>
// 					First Name
// 					<input placeholder='Enter name...' />
// 				</StyledLabel>
// 				<StyledLabel>
// 					Last Name
// 					<input placeholder='Enter surname...' />
// 				</StyledLabel>
// 				<StyledLabel>
// 					Email
// 					<input placeholder='Enter email...' />
// 				</StyledLabel>
// 				<StyledLabel>
// 					Age
// 					<input type='number' placeholder='Enter age...' />
// 				</StyledLabel>

// 				<StyledLabel>
// 					Choose your country
// 					<select>
// 						<option value='ukraine'>Ukraine</option>
// 						<option value='usa'>USA</option>
// 						<option value='spain'>Spain</option>
// 					</select>
// 				</StyledLabel>
// 				<StyledFlex>
// 					<StyledLabel $display='flex'>
// 						<input type='radio' value='female' name='gender' />
// 						Male
// 					</StyledLabel>
// 					<StyledLabel $display='flex'>
// 						<input type='radio' value='female' name='gender' />
// 						Female
// 					</StyledLabel>
// 				</StyledFlex>
// 				<StyledLabel>
// 					Send us your letter
// 					<textarea placeholder='Are you so cool today!!' />
// 				</StyledLabel>
// 				<StyledLabel $display='flex'>
// 					<input type='checkbox' />
// 					I'm confirm this rules!
// 				</StyledLabel>
// 				<StyledButton>Submit</StyledButton>
// 			</StyledFlex>
// 		</StyledForm>
// 	)
// }
const StyledForm = styled.form`
	background-color: white;
	padding: 10px 22px;
	box-shadow: ${({ theme }) => theme.shadows.md};
`
export default RegisterForm
