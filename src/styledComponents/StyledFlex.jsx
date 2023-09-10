import React from 'react'
import styled from 'styled-components'

export const StyledFlex = props => {
	return <Flex {...props} />
}
const Flex = styled.div`
	display: flex;

	flex-direction: ${props => props.$direction || 'row'};
	min-height: ${props => (props.$center ? '100vh' : 'auto')};
	justify-content: ${props => (props.$center ? 'center' : props.$justify || 'center')};
	align-items: ${props => (props.$center ? 'center' : 'auto')};
	gap: ${props => props.$gap || '10px'};
`
