import React from 'react'
import { string, func } from 'prop-types'

const Character = ({ name, color, onClick }) => (
  <li>
    <span style={{ color }}>{name}</span>
    <button type="button" onClick={() => onClick(name)}>
      remover
    </button>
  </li>
)

Character.propTypes = {
  name: string.isRequired,
  color: string.isRequired,
  onClick: func.isRequired,
}

export default Character
