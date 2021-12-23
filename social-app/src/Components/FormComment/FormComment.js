import React from "react";
import { AuthContext } from '../../App'

export default function FormComment({ postId, handleAddComment }) {
  const { user } = React.useContext(AuthContext)
  const [value, setValue] = React.useState('')

  const handleChangeInput = (value) => {
    setValue(value)
  }

  const handleOnSubmitComment = (e) => {
    e.preventDefault()
    const data = {
      content: value,
      postId
    }
    handleAddComment(data)
    setValue('')
  }

  return (
    <>
      <div className=" me-1">
        <img
          className='rounded-circle border border-white'
          style={{ width: 40, height: 40, objectFit: 'cover' }}
          src={user.avatar}
          alt="user"
        />
      </div>
      <form className="flex-grow-1 p-1 rounded me-2 " onSubmit={(e) => {
        handleOnSubmitComment(e)
      }}>
        <div className="form-group" >
          <input
            className="form-control"
            placeholder="Enter new comment"
            value={value}
            onChange={(e) => { handleChangeInput(e.target.value) }}
          />
        </div>
      </form>
    </>


  )
}