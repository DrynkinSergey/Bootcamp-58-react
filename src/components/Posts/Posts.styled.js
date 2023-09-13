import styled from 'styled-components'
export const Wrapper = styled.ol`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	margin: 0 auto;
	gap: 15px;
	list-style: none;
`
export const WrapperPosts = styled.section`
	display: grid;
	max-width: 90%;
	margin: 0 auto;
	padding-bottom: 50px;
`
export const Card = styled.li`
	border: 2px solid black;
	padding: 5px 12px;
	box-shadow: 1px 1px 1px 2px gray;
`
