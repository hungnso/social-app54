import React from 'react';
import { AuthContext } from '../../App'
import UserComment from '../../Components/User/UserComment'
import MenuItem from './MenuItem'

export default function ListMenuBar() {
  const { user } = React.useContext(AuthContext);

  // const links = [
  //   {
  //     src: 'https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
  //     value: 'Friend'
  //   },
  //   {
  //     src: 'https://www.facebook.com/rsrc.php/v3/yr/r/2uPlV4oORjU.png',
  //     value: 'Saved'
  //   },
  //   {
  //     src: 'https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
  //     value: 'Group'
  //   },
  // ]
  return (
    <div className='mb-2 d-flex justify-content-start flex-column overflow-auto' >
      <UserComment userId={user._id} />
      <MenuItem />
    </div>
  )
}