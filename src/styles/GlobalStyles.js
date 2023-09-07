import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${({ theme }) => theme.backgrounds.main};
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
