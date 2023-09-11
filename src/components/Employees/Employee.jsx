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
		isAvailable: false,
		activeSkill: 'all',
	}
	handleDeleteUser = id => {
		const newUsers = this.state.users.filter(user => user.id !== id)
		this.setState({ users: newUsers })
	}
	handleChangeFilter = filterStr => {
		this.setState({ filterStr })
	}
	handleChangeAvailable = () => {
		this.setState(prev => ({ isAvailable: !prev.isAvailable }))
	}
	handleChangeSkill = activeSkill => {
		this.setState({ activeSkill })
	}

	render() {
		const { users, activeSkill, filterStr, isAvailable } = this.state
		const filteredData = getFilteredData(users, filterStr, isAvailable, activeSkill)

		return (
			<Wrapper>
				<EmployeesFilter
					toggleIsAvailable={this.handleChangeAvailable}
					isAvailable={isAvailable}
					filterStr={filterStr}
					setFilter={this.handleChangeFilter}
					setActiveSkill={this.handleChangeSkill}
					activeSkill={activeSkill}
				/>
				<EmployeeList users={filteredData} onDeleteUser={this.handleDeleteUser} />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	background-color: lightgray;
`
