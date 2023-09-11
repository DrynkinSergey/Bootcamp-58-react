import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { styled } from 'styled-components'
import { Component } from 'react'

export class Employee extends Component {
	state = {
		users: userData,
	}
	handleDeleteUser = id => {
		const newUsers = this.state.users.filter(user => user.id !== id)
		this.setState({ users: newUsers })
	}
	render() {
		const { users } = this.state
		return (
			<Wrapper>
				<EmployeesFilter />
				<EmployeeList users={users} onDeleteUser={this.handleDeleteUser} />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	background-color: lightgray;
`
