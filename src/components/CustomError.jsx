import React from 'react'

export const CustomError = ({ errors, name, message }) => {
	return <p>{errors[name] && errors[name].message}</p>
}
