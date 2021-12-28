import React from 'react';
import { AuthContext } from '../../App'
import UserComment from '../../Components/User/UserComment'
import MenuItem from './MenuItem'

export default function ListMenuBar() {

  return (
    <div className='mb-2 d-flex justify-content-start flex-column overflow-auto' >
      <div>
        <UserComment />
      </div>
      <MenuItem />
    </div>
  )
}