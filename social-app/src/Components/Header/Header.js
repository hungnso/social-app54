import React from 'react';
import { AuthContext } from '../../App'

export default function Header() {
  const { user } = React.useContext(AuthContext)

  return (
    <>
      <h4 className="py-1 px-3">Social App - {user.username}</h4>
    </>
  )
}