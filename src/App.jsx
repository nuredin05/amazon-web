import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import { Routing } from './Routing'
import Loader from './Components/Loader/Loader'
import { DataContext } from './Components/dataProvider/dataProvider'
import { auth } from './utils/firebase'
import { Type } from './utils/action.type'

function App() {
  const [{ user }, dispatch] = useContext(DataContext)
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser
        })

      } else {
        dispatch({
          type: Type.SET_USER,
          user: null
        })
      }
    })
  }, [])
  return (
    <>
      <Routing />

      <Loader />
    </>
  )
}

export default App