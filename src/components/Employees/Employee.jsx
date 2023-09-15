import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import { styled } from 'styled-components'
import { Component, useState } from 'react'
import { getFilteredData } from '../../helpers/getFilteredData'
import Modal from '../Modal/Modal'

// export class Employee extends Component {
// 	state = {
// 		users: userData,
// 		filterStr: '',
// 		isAvailable: false,
// 		activeSkill: 'all',
// 		isOpenModal: false,
// 	}
// componentDidMount() {
// 	console.log('MOUNT')
// 	const items = JSON.parse(window.localStorage.getItem('USERS'))
// 	if (items?.length) {
// 		this.setState({ users: items })
// 	}
// 	console.log(items)
// }
// componentDidUpdate(prevProps, prevState) {
// 	if (prevState.users !== this.state.users) {
// 		window.localStorage.setItem('USERS', JSON.stringify(this.state.users))
// 	}
// }
// handleDeleteUser = id => {
// 	const newUsers = this.state.users.filter(user => user.id !== id)
// 	this.setState({ users: newUsers })
// }
// handleChangeFilter = filterStr => {
// 	this.setState({ filterStr })
// }
// handleChangeAvailable = () => {
// 	this.setState(prev => ({ isAvailable: !prev.isAvailable }))
// }
// handleChangeSkill = activeSkill => {
// 	this.setState({ activeSkill })
// }
// toggleModal = () => {
// 	this.setState(prev => ({ isOpenModal: !prev.isOpenModal }))
// }
// render() {
// 	const { users, activeSkill, filterStr, isAvailable, isOpenModal } = this.state
// 	const filteredData = getFilteredData(users, filterStr, isAvailable, activeSkill)

// 	return (
// 		<Wrapper>
// 			<EmployeesFilter
// 				toggleIsAvailable={this.handleChangeAvailable}
// 				isAvailable={isAvailable}
// 				filterStr={filterStr}
// 				setFilter={this.handleChangeFilter}
// 				setActiveSkill={this.handleChangeSkill}
// 				activeSkill={activeSkill}
// 				toggleModal={this.toggleModal}
// 			/>
// 			<EmployeeList users={filteredData} onDeleteUser={this.handleDeleteUser} />
// 			{isOpenModal && (
// 				<Modal close={this.toggleModal}>
// 					<h1>Продам диван</h1>
// 				</Modal>
// 			)}
// 		</Wrapper>
// 	)
// 	}
// }

export const Employee = () => {
	const [users, setUsers] = useState(userData)
	const [filterStr, setFilterStr] = useState('')
	const [isAvailable, setIsAvailable] = useState(false)
	const [activeSkill, setActiveSkill] = useState('all')
	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleDeleteUser = id => {
		// const newUsers = this.state.users.filter(user => user.id !== id)
		// this.setState({ users: newUsers })
		setUsers(prev => prev.filter(user => user.id !== id))
	}
	const handleChangeFilter = filterStr => {
		// this.setState({ filterStr })
		setFilterStr(filterStr)
	}
	const handleChangeAvailable = () => {
		// this.setState(prev => ({ isAvailable: !prev.isAvailable }))
		setIsAvailable(prev => !prev)
	}
	const handleChangeSkill = activeSkill => {
		// this.setState({ activeSkill })
		setActiveSkill(activeSkill)
	}
	const toggleModal = () => {
		setIsOpenModal(prev => !prev)
		// this.setState(prev => ({ isOpenModal: !prev.isOpenModal }))
	}

	const filteredData = getFilteredData(users, filterStr, isAvailable, activeSkill)

	return (
		<Wrapper>
			<EmployeesFilter
				toggleIsAvailable={handleChangeAvailable}
				isAvailable={isAvailable}
				filterStr={filterStr}
				setFilter={handleChangeFilter}
				setActiveSkill={handleChangeSkill}
				activeSkill={activeSkill}
				toggleModal={toggleModal}
			/>
			<EmployeeList users={filteredData} onDeleteUser={handleDeleteUser} />
			{isOpenModal && (
				<Modal close={toggleModal}>
					<h1>Продам диван</h1>
				</Modal>
			)}
		</Wrapper>
	)
}
const Wrapper = styled.div`
	background-color: lightgray;
`
