import React from 'react';
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import useAuth from '../../hooks/useAuth';

export default function ButtonAdd({ userId, item, userGuest }) {
  const userMe = useAuth();

  const renderHome = () => {
    return ''
  }

  const renderFollowers = () => {
    return ''
  }

  const renderFollowing = () => {
    return (
      <div>
        {userGuest === userMe._id ? (
          <button
            className='btn p-1 m-1'
          // onClick={() => { handleClickUnfollow(follow._id) }}
          >
            <Icon.UserMinus />
          </button>
        ) : (
          userId === userMe._id ? '' : (
            <button
              className='btn p-1 m-1'
            // onClick={() => { handleClickUnfollow(follow._id) }}
            >
              <Icon.UserPlus />
            </button>
          )

        )}
      </div>
    )
  }

  const renderListUser = () => {
    return (
      <div>
        {
          userId === userMe._id ? '' : (
            <button
              className='btn p-1 m-1'
            // onClick={() => { handleClickUnfollow(follow._id) }}
            >
              <Icon.UserPlus />
            </button>
          )

        }
      </div>
    )
  }

  const renderButton = () => {
    return (
      item === 'home' ? renderHome() :
        item === 'following' ? renderFollowing() :
          item === 'followers' ? renderFollowers() :
            ''
    )
  }

  return (
    <div>
      <button
        className='btn p-1 m-1'
      // onClick={() => { handleClickUnfollow(follow._id) }}
      >
        <Icon.MessageCircle />
      </button>
      {renderButton()}
    </div>
  )





  // return (
  //   <div>
  //     {item === 'home' ? (
  //       <button
  //         className='btn p-1 m-1'
  //       // onClick={() => { handleClickUnfollow(follow._id) }}
  //       >
  //         <Icon.MessageCircle />
  //       </button>
  //     ) :
  //       item === 'following' ? (
  //         <div>
  //           {userId === userMe._id ? (
  //             <div>
  //               <button
  //                 className='btn p-1 m-1'
  //               // onClick={() => { handleClickUnfollow(follow._id) }}
  //               >
  //                 <Icon.MessageCircle />
  //               </button>

  //               <button
  //                 className='btn p-1 m-1'
  //                 onClick={() => { handleClickUnfollow(follow._id) }}
  //               >
  //                 <Icon.UserMinus />
  //               </button>

  //             </div>
  //           ) : (
  //             <div>
  //               <button
  //                 className='btn p-1 m-1'
  //               // onClick={() => { handleClickUnfollow(follow._id) }}
  //               >
  //                 <Icon.MessageCircle />
  //               </button>
  //               <button
  //                 className='btn p-1 m-1'
  //               // onClick={() => { handleClickUnfollow(follow._id) }}
  //               >
  //                 <Icon.UserMinus />
  //               </button>
  //             </div>
  //           )}

  //         </div>
  //       )
  //   }



  //     {userId === userMe._id ? (
  //       <div>
  //         <button
  //           className='btn p-1 m-1'
  //         // onClick={() => { handleClickUnfollow(follow._id) }}
  //         >
  //           <Icon.MessageCircle />
  //         </button>
  //         {item === 'home' ? "" :
  //           item === 'following' ? (
  //             <button
  //               className='btn p-1 m-1'
  //               onClick={() => { handleClickUnfollow(follow._id) }}
  //             >
  //               <Icon.UserMinus />
  //             </button>
  //           ) :
  //             item === 'followers' ? "" : ''
  //         }
  //       </div>
  //     ) : (
  //       <div>
  //         <button
  //           className='btn p-1 m-1'
  //         // onClick={() => { handleClickUnfollow(follow._id) }}
  //         >
  //           <Icon.MessageCircle />
  //         </button>
  //         <button
  //           className='btn p-1 m-1'
  //         // onClick={() => { handleClickUnfollow(follow._id) }}
  //         >
  //           <Icon.UserMinus />
  //         </button>
  //       </div>
  //     )}

  //   </div>
  // )
}