import { Button } from '@/ui/components/Button'
import React from 'react'

const Header = () => {
  return (
    <div className='h-16 flex justify-between'>
        <div 
            className='h-100 flex justify-center items-center ml-4'
            style={{
                color: "var(--color-accent)"
            }}
        >
            DUYNTM
        </div>
        <div className='flex  items-center'>
        <div className=''>about</div>
        <div className=''>selected works</div>
            <Button variant="contained">Hey</Button>
        </div>
    </div>
  )
}

export default Header