import React from 'react';

export default function MenuItem() {

  const links = [
    {
      src: 'https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png',
      value: 'Friends'
    },
    {
      src: 'https://www.facebook.com/rsrc.php/v3/yr/r/2uPlV4oORjU.png',
      value: 'Saved'
    },
    {
      src: 'https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png',
      value: 'Groups'
    },
    {
      src: 'https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png',
      value: 'Messenger'
    },
  ]
  return (
    <div className='mb-2 d-flex justify-content-start flex-column' > 
      <ul className='list-group' >
        {links.map((link, index) => {
          return (
            <li key={index} className='list-group-item border-0' style={{ backgroundColor: '#F0F2F5' }}>
              <a>
                <div className='d-flex align-items-center'>
                  <div className='me-3'>
                    <img src={link.src} style={{ width: '36px', height: '36px' }} />
                  </div>
                  <div>
                    <b>{link.value}</b>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}