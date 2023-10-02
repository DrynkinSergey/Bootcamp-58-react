import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'

const useMyContext = () => useContext(MyContext)

export default useMyContext
