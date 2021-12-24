import React from 'react';
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import { AuthContext } from '../../App'

export default function Navbar() {

  const { user } = React.useContext(AuthContext)

  return (
    <div className="navbar navbar-dark bg-primary align-items-start d-flex flex-column h-100">
      <nav className="nav flex-column px-1 ">
        <div className="overflow-hidden m-auto my-3">
          <img className='rounded-circle border border-white'
            style={{ width: 50, height: 50, objectFit: 'cover' }}
            src={user.avatar || 'https://cdt.org/files/2015/10/2015-10-06-FB-person.png'}
            alt="user"
          />
        </div>
        <Link className="nav-link text-light my-2" to="/"><Icon.Home /></Link>
        <a className="nav-link text-light my-2" href="#"><Icon.MessageCircle /></a>
        <Link className="nav-link text-light my-2" to="/friends"><Icon.User /></Link>
        <Link className="nav-link text-light my-2" to="/create-post"><Icon.FilePlus /></Link>
        <a className="nav-link text-light my-2" href="#"><Icon.List /></a>
        <a className="nav-link text-light my-2" href="#"><Icon.Bell /></a>
      </nav>
      <div className="btn-group dropup ">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <Icon.Settings />
        </button>
        <ul className="dropdown-menu">
          <li><Link className='dropdown-item' to="/login">Sigout <Icon.ChevronRight className='float-end text-secondary' /></Link></li>
          <li><Link className='dropdown-item' to={`/user/${user._id}`}>Profile <Icon.ChevronRight className='float-end text-secondary' /></Link></li>
        </ul>
      </div>
    </div>
  )
}