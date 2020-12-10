import React, { useState, useEffect } from 'react'

import Character from '../components/Character'

import api from '../services/api'
import './style.css'

const Home = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { results },
      } = await api.get('people')
      setPeople(results)
    })()
  }, [])

  const handleClick = (name) =>
    setPeople(people.filter((person) => name !== person.name))

  return (
    <ul>
      {people.map(({ name, eye_color: eyeColor }) => (
        <Character
          name={name}
          color={eyeColor}
          onClick={handleClick}
          key={name}
        />
      ))}
    </ul>
  )
}

export default Home
