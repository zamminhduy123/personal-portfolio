import { Button } from '@/ui/components/Button'
import React from 'react'

const Header = () => {
  return (
    <div className='h-16 flex justify-between fixed w-full text-white z-10' style={{
        background: "linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0.00) 100%)",
    }}>
        <div 
            className='h-100 flex justify-center items-center ml-4 text-base font-semibold'
            style={{
                color: "var(--color-accent)"
            }}
        >
            DUYNTM
        </div>
        <div className='grid grid-cols-4 items-center' style={{fontSize: 9}}>
            <div className='col-start-1 flex justify-center px-4'>about</div>
            <div className='col-start-2 text-center px-4'>selected<br/>works</div>
            <div className='col-start-3 col-span-2 flex justify-center px-4'>
                <Button variant="contained" size='sm' className='w-full'>Hey</Button>
            </div>
        </div>
    </div>
  )
}

export default Header