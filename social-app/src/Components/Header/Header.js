import React from 'react';
import useAuth from '../../hooks/useAuth';

export default function Header() {
  const user = useAuth();

  return (
    <>
      <h4 className="py-1 px-3">Social App - {user.username}</h4>
    </>
  )
}