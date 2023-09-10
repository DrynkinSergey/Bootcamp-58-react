import React from 'react'
import styled from 'styled-components'

const StyledLabel = props => {
	return <Label {...props} />
}
const Label = styled.label`
	display: ${props => props.$display || 'grid'};
	gap: ${props => props.$gap || '5px'};
`

export default StyledLabel
