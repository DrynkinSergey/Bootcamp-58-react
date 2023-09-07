import { styled } from 'styled-components'

// .wrapper {
// display: flex;
// flex-direction: column;
// gap: 15px;
// border: 1px solid black;
// padding: 20px 10px;
// list-style: none;
// }
// .item {
// background-color: teal;
// color: white;
// padding: 10px 5px;
// border-radius: 4px;
// box-shadow: 2px 2px 1px 1px gray;
// }
export const StyledItem = styled.li`
	background-color: ${props => (props.$idx % 2 === 0 ? 'teal' : 'tomato')};
	color: white;
	padding: 10px 5px;
	border-radius: 4px;
	box-shadow: 2px 2px 1px 1px gray;
`
export const StyledWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 15px;
	border: 1px solid black;
	padding: 20px 10px;
	list-style: none;
`
export const StyledTitleSection = styled.h1`
	font-style: italic;
	font-size: 2.5rem;
	color: ${props => props.$color};
`

export const TestBox = styled.div`
	width: 150px;
	height: 150px;
	background-color: ${props => props.$bg};
`
