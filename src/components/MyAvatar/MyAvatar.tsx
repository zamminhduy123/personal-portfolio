import Image from 'next/image'
import React from 'react'
import avatar from '@static/avatar.jpg'
import avatarNoBg from '@static/avatar-no-bg.png'
import clsx from 'clsx'

const MyAvatar = () => {
  return (
    <div className='w-full h-full relative flex items-center justify-center'>
        <div className='w-full absolute' style={{zIndex: 2}}>
            <Image src={avatarNoBg} alt='me'/>
        </div>
          <p className={clsx("w-fit", "font-semibold", "cursor-default", "marquee", "absolute", "origin-center", "rotate-90")}
              style={{ zIndex: 1, fontSize: "20rem", letterSpacing: "2.5rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <span>DUY</span>
              <span>DUY</span>
              <span>DUY</span>
              <span>DUY</span>
              <span>DUY</span>
              <span>DUY</span>
          </p>
        <div className='w-full absolute'>
            <Image src={avatar} alt='me'/>
        </div>
    </div>
  )
}

export default MyAvatar