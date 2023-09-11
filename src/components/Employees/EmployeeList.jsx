import styled from 'styled-components'
import { EmployeeCard } from './EmployeeCard'

export const EmployeeList = ({ users = [], onDeleteUser }) => {
	if (!users.length) {
		return <h1>Немає юзерів для роботи</h1>
	}

	return (
		<UserList>
			{users.map(user => (
				<EmployeeCard key={user.id} {...user} onDeleteUser={onDeleteUser} />
			))}
		</UserList>
	)
}
const UserList = styled.ul`
	justify-content: center;
	gap: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
`
