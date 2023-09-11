import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { styled } from 'styled-components'
import { Component } from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'

export class Employee extends Component {
	state = {
		users: userData,
		filterStr: '',
	}
	handleDeleteUser = id => {
		const newUsers = this.state.users.filter(user => user.id !== id)
		this.setState({ users: newUsers })
	}
	handleChangeFilter = filterStr => {
		this.setState({ filterStr })
	}

	render() {
		const { users, filterStr } = this.state
		const filteredData = getFilteredData(users, filterStr)
		return (
			<Wrapper>
				<EmployeesFilter filterStr={filterStr} setFilter={this.handleChangeFilter} />
				<EmployeeList users={filteredData} onDeleteUser={this.handleDeleteUser} />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	background-color: lightgray;
`
