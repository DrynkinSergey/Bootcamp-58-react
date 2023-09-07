import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
	//Підключення гугл шрифта
	@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  background-color: ${({ theme }) => theme.backgrounds.main};
	// Використання
	font-family: 'Coming Soon', cursive;;
color: ${({ theme }) => theme.colors.fontColor};
}

.title{
  color: darkblue
}
`
export const Flex = styled.div`
	display: flex;
	flex-direction: ${props => props.$direction || 'row'};
	justify-content: ${props => props.$justify || 'stretch'};
	align-items: ${props => props.$items || 'stretch'};
	min-height: ${props => props.$mh || 'auto'};
	gap: ${props => props.$gap || '4px'};
`
